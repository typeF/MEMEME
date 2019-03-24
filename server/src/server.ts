import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import { makePrismaSchema } from 'nexus-prisma';
import { permissions } from './permissions';
import * as path from 'path';
import * as allTypes from './resolvers';

const schema = makePrismaSchema({
  types: allTypes,

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
});

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  // context: { prisma }
  context: request => {
    return {
      ...request,
      prisma
    }
  }
});

server.start(() => console.log('Server is running on http://localhost:4000'));
