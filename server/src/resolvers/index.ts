// export * from "./query";
// export * from "./mutation";
// export * from "./Query";
// export * from "./AuthPayload";
// export * from "./User";

import { Query } from './Query';
import { User } from './User';
import { Mutation } from './Mutation';
import { AuthPayload } from './AuthPayload';

export const resolvers = {
  Query,
  User,
  Mutation,
  AuthPayload
}