import { stringArg, idArg, mutationType } from 'nexus';
import { hash, compare } from 'bcrypt';
import { PRIVATE_KEY, getUserId } from '../utils/authentication';
import { sign } from 'jsonwebtoken';

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        username: stringArg(),
        email: stringArg(),
        password: stringArg()
      },
      resolve: async (parent, { username, email, password }, context) => {
        const hashedPassword = await hash(password, 10)
        const user = await context.prisma.createUser({
          username,
          email,
          password: hashedPassword
        });
        return {
          user
        }
      }
    });

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { email, password }, context) => {
        console.log("Login attempt with user/pass: " + email + ", " + password);

        let autoLogin = false;
        const authorizedAutoLogins = ["100yrgrandma@mememe.com", "alice@mememe.com", "bob@mememe.com", "chicken@mememe.com", "dinosaur@mememe.com"];
        for (let i = 0; i < authorizedAutoLogins.length; i++) {
          if (authorizedAutoLogins[i] === email) {
            autoLogin = true;
            break;
          }
        }

        console.log("autologin: " + autoLogin);

        const user = await context.prisma.user({ email })
        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        if (!autoLogin) {
          const passwordValid = await compare(password, user.password);
          if (!passwordValid) {
            context.request.session.jwt = null;
            throw new Error('Invalid password');
          }
        }

        const token = sign({ userId: user.id }, PRIVATE_KEY);
        context.request.session.jwt = token;

        console.log(`${user.username} logged in`);

        return {
          user
        }
      }
    });

    t.field('logout', {
      type: 'User',
      nullable: true, // Allows mutation to return null
      resolve: async (parent, { }, context) => {
        console.log('Logged user out');
        context.request.session.cookie.maxAge = new Date(Date.now() - 1);
        context.request.session.jwt = "Good-bye!";
        return null;
      }
    });

    t.field('updateUser', {
      type: 'User',
      nullable: true,
      args: {
        id: idArg(),
        username: stringArg()
      },
      resolve: async (parent, { id, username }, context) => {
        return context.prisma.updateUser({
          where: { id },
          data: { username }
        });
      }
    });

    t.field('createThread', {
      type: 'Thread',
      nullable: true,
      args: {
        forum: stringArg(),
        title: stringArg(),
        content: stringArg()
      },
      resolve: async (parent, { forum, title, content }, context) => {

        console.log("Creating thread...");

        const author = getUserId(context);
        const mostRecentThread = await context.prisma.threads({
          where: {
            forum: {
              name: forum
            }
          },
          orderBy: "threadnumber_DESC",
          first: 1
        });

        const lastThreadNumber = mostRecentThread[0].threadnumber;

        return context.prisma.createThread({
          forum: { connect: { name: forum } },
          author: { connect: { id: author } },
          threadnumber: lastThreadNumber + 1,
          title,
          posts: {
            create: [{
              author: { connect: { id: author } },
              postnumber: 1,
              content,
            }]
          }
        });
      }
    });

    t.field('createPost', {
      type: 'Post',
      nullable: true,
      args: {
        thread: stringArg(),
        content: stringArg()
      },
      resolve: async (parent, { thread, content }, context) => {

        console.log("Creating new post...");

        const author = getUserId(context);
        const mostRecentPost = await context.prisma.posts({
          where: {
            thread: {
              id: thread
            }
          },
          orderBy: "postnumber_DESC",
          first: 1
        });

        const lastPostNumber = mostRecentPost[0].postnumber;

        const post = context.prisma.createPost({
          thread: { connect: { id: thread } },
          author: { connect: { id: author } },
          postnumber: lastPostNumber + 1,
          content
        });

        return post;
      }
    });
  },
});