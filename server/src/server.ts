import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import { makePrismaSchema } from 'nexus-prisma';
import { permissions } from './permissions';
import { PRIVATE_KEY } from './utils/authentication';
import * as session from 'express-session';
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
  context: request => {
    return {
      ...request,
      prisma
    }
  }
});


server.express.use(session({
  name: 'qid',
  secret: PRIVATE_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
  }
}));

const cors = {
  credentials: true,
  origin: "http://localhost:3000"
}

server.start({cors}, () => console.log('Server is running on http://localhost:4000'));
