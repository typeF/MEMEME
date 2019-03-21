import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import * as path from 'path';
import { makePrismaSchema } from 'nexus-prisma';
import { GraphQLServer } from 'graphql-yoga';
import * as allTypes from './schema';

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
  context: { prisma }
});

server.start(() => console.log('Server is running on http://localhost:4000'));
