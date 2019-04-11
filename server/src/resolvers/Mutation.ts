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
        const user = await context.prisma.user({ email })
        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        const passwordValid = await compare(password, user.password);
        if (!passwordValid) {
            context.request.session.jwt = null;
            throw new Error('Invalid password');
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
      resolve: async (parent, {}, context) => {
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
  },
});