import { stringArg, idArg, mutationType } from 'nexus';
import { hash, compare } from 'bcrypt';
import { PRIVATE_KEY, getUserId } from '../utils/authentication';
import { sign } from 'jsonwebtoken';

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: stringArg(),
        password: stringArg()
      },
      resolve: async (parent, { name, email, password }, context) => {
        const hashedPassword = await hash(password, 10)
        const user = await context.prisma.createUser({
          name,
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
        const user = await context.prisma.user({ email })
        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        const passwordValid = await compare(password, user.password);
        if (!passwordValid) {
          throw new Error('Invalid password');
        }
        
        const token = sign({ userId: user.id }, PRIVATE_KEY);
        context.request.session.jwt = token;

        return {
          user
        }
      }
    });

    t.field('updateUser', {
      type: 'User',
      nullable: true,
      args: { 
        id: idArg(),
        name: stringArg()
      },
      resolve: async (parent, { id, name }, context) => {
        return context.prisma.updateUser({ 
          where: { id },
          data: { name }
        });
      }
    });
  },
});