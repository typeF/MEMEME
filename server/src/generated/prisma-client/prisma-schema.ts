// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateForum {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateThread {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Forum {
  id: ID!
  name: String!
  threads(where: ThreadWhereInput, orderBy: ThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thread!]
}

type ForumConnection {
  pageInfo: PageInfo!
  edges: [ForumEdge]!
  aggregate: AggregateForum!
}

input ForumCreateInput {
  name: String!
  threads: ThreadCreateManyWithoutForumInput
}

input ForumCreateOneWithoutThreadsInput {
  create: ForumCreateWithoutThreadsInput
  connect: ForumWhereUniqueInput
}

input ForumCreateWithoutThreadsInput {
  name: String!
}

type ForumEdge {
  node: Forum!
  cursor: String!
}

enum ForumOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ForumPreviousValues {
  id: ID!
  name: String!
}

type ForumSubscriptionPayload {
  mutation: MutationType!
  node: Forum
  updatedFields: [String!]
  previousValues: ForumPreviousValues
}

input ForumSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ForumWhereInput
  AND: [ForumSubscriptionWhereInput!]
  OR: [ForumSubscriptionWhereInput!]
  NOT: [ForumSubscriptionWhereInput!]
}

input ForumUpdateInput {
  name: String
  threads: ThreadUpdateManyWithoutForumInput
}

input ForumUpdateManyMutationInput {
  name: String
}

input ForumUpdateOneRequiredWithoutThreadsInput {
  create: ForumCreateWithoutThreadsInput
  update: ForumUpdateWithoutThreadsDataInput
  upsert: ForumUpsertWithoutThreadsInput
  connect: ForumWhereUniqueInput
}

input ForumUpdateWithoutThreadsDataInput {
  name: String
}

input ForumUpsertWithoutThreadsInput {
  update: ForumUpdateWithoutThreadsDataInput!
  create: ForumCreateWithoutThreadsInput!
}

input ForumWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  threads_every: ThreadWhereInput
  threads_some: ThreadWhereInput
  threads_none: ThreadWhereInput
  AND: [ForumWhereInput!]
  OR: [ForumWhereInput!]
  NOT: [ForumWhereInput!]
}

input ForumWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createForum(data: ForumCreateInput!): Forum!
  updateForum(data: ForumUpdateInput!, where: ForumWhereUniqueInput!): Forum
  updateManyForums(data: ForumUpdateManyMutationInput!, where: ForumWhereInput): BatchPayload!
  upsertForum(where: ForumWhereUniqueInput!, create: ForumCreateInput!, update: ForumUpdateInput!): Forum!
  deleteForum(where: ForumWhereUniqueInput!): Forum
  deleteManyForums(where: ForumWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createThread(data: ThreadCreateInput!): Thread!
  updateThread(data: ThreadUpdateInput!, where: ThreadWhereUniqueInput!): Thread
  updateManyThreads(data: ThreadUpdateManyMutationInput!, where: ThreadWhereInput): BatchPayload!
  upsertThread(where: ThreadWhereUniqueInput!, create: ThreadCreateInput!, update: ThreadUpdateInput!): Thread!
  deleteThread(where: ThreadWhereUniqueInput!): Thread
  deleteManyThreads(where: ThreadWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  postnumber: Int!
  author: User!
  content: String!
  thread: Thread!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  postnumber: Int!
  author: UserCreateOneWithoutPostsInput!
  content: String!
  thread: ThreadCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutThreadInput {
  create: [PostCreateWithoutThreadInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  postnumber: Int!
  content: String!
  thread: ThreadCreateOneWithoutPostsInput!
}

input PostCreateWithoutThreadInput {
  postnumber: Int!
  author: UserCreateOneWithoutPostsInput!
  content: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  postnumber_ASC
  postnumber_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  postnumber: Int!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  postnumber: Int
  postnumber_not: Int
  postnumber_in: [Int!]
  postnumber_not_in: [Int!]
  postnumber_lt: Int
  postnumber_lte: Int
  postnumber_gt: Int
  postnumber_gte: Int
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  postnumber: Int
  author: UserUpdateOneRequiredWithoutPostsInput
  content: String
  thread: ThreadUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  postnumber: Int
  content: String
}

input PostUpdateManyMutationInput {
  postnumber: Int
  content: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutThreadInput {
  create: [PostCreateWithoutThreadInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutThreadInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutThreadInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  postnumber: Int
  content: String
  thread: ThreadUpdateOneRequiredWithoutPostsInput
}

input PostUpdateWithoutThreadDataInput {
  postnumber: Int
  author: UserUpdateOneRequiredWithoutPostsInput
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpdateWithWhereUniqueWithoutThreadInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutThreadDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostUpsertWithWhereUniqueWithoutThreadInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutThreadDataInput!
  create: PostCreateWithoutThreadInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  postnumber: Int
  postnumber_not: Int
  postnumber_in: [Int!]
  postnumber_not_in: [Int!]
  postnumber_lt: Int
  postnumber_lte: Int
  postnumber_gt: Int
  postnumber_gte: Int
  author: UserWhereInput
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  thread: ThreadWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  forum(where: ForumWhereUniqueInput!): Forum
  forums(where: ForumWhereInput, orderBy: ForumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Forum]!
  forumsConnection(where: ForumWhereInput, orderBy: ForumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ForumConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  thread(where: ThreadWhereUniqueInput!): Thread
  threads(where: ThreadWhereInput, orderBy: ThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thread]!
  threadsConnection(where: ThreadWhereInput, orderBy: ThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ThreadConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  forum(where: ForumSubscriptionWhereInput): ForumSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  thread(where: ThreadSubscriptionWhereInput): ThreadSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Thread {
  id: ID!
  threadnumber: Int!
  forum: Forum!
  author: User!
  title: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ThreadConnection {
  pageInfo: PageInfo!
  edges: [ThreadEdge]!
  aggregate: AggregateThread!
}

input ThreadCreateInput {
  threadnumber: Int!
  forum: ForumCreateOneWithoutThreadsInput!
  author: UserCreateOneWithoutThreadsInput!
  title: String!
  posts: PostCreateManyWithoutThreadInput
}

input ThreadCreateManyWithoutAuthorInput {
  create: [ThreadCreateWithoutAuthorInput!]
  connect: [ThreadWhereUniqueInput!]
}

input ThreadCreateManyWithoutForumInput {
  create: [ThreadCreateWithoutForumInput!]
  connect: [ThreadWhereUniqueInput!]
}

input ThreadCreateOneWithoutPostsInput {
  create: ThreadCreateWithoutPostsInput
  connect: ThreadWhereUniqueInput
}

input ThreadCreateWithoutAuthorInput {
  threadnumber: Int!
  forum: ForumCreateOneWithoutThreadsInput!
  title: String!
  posts: PostCreateManyWithoutThreadInput
}

input ThreadCreateWithoutForumInput {
  threadnumber: Int!
  author: UserCreateOneWithoutThreadsInput!
  title: String!
  posts: PostCreateManyWithoutThreadInput
}

input ThreadCreateWithoutPostsInput {
  threadnumber: Int!
  forum: ForumCreateOneWithoutThreadsInput!
  author: UserCreateOneWithoutThreadsInput!
  title: String!
}

type ThreadEdge {
  node: Thread!
  cursor: String!
}

enum ThreadOrderByInput {
  id_ASC
  id_DESC
  threadnumber_ASC
  threadnumber_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ThreadPreviousValues {
  id: ID!
  threadnumber: Int!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ThreadScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  threadnumber: Int
  threadnumber_not: Int
  threadnumber_in: [Int!]
  threadnumber_not_in: [Int!]
  threadnumber_lt: Int
  threadnumber_lte: Int
  threadnumber_gt: Int
  threadnumber_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ThreadScalarWhereInput!]
  OR: [ThreadScalarWhereInput!]
  NOT: [ThreadScalarWhereInput!]
}

type ThreadSubscriptionPayload {
  mutation: MutationType!
  node: Thread
  updatedFields: [String!]
  previousValues: ThreadPreviousValues
}

input ThreadSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ThreadWhereInput
  AND: [ThreadSubscriptionWhereInput!]
  OR: [ThreadSubscriptionWhereInput!]
  NOT: [ThreadSubscriptionWhereInput!]
}

input ThreadUpdateInput {
  threadnumber: Int
  forum: ForumUpdateOneRequiredWithoutThreadsInput
  author: UserUpdateOneRequiredWithoutThreadsInput
  title: String
  posts: PostUpdateManyWithoutThreadInput
}

input ThreadUpdateManyDataInput {
  threadnumber: Int
  title: String
}

input ThreadUpdateManyMutationInput {
  threadnumber: Int
  title: String
}

input ThreadUpdateManyWithoutAuthorInput {
  create: [ThreadCreateWithoutAuthorInput!]
  delete: [ThreadWhereUniqueInput!]
  connect: [ThreadWhereUniqueInput!]
  set: [ThreadWhereUniqueInput!]
  disconnect: [ThreadWhereUniqueInput!]
  update: [ThreadUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ThreadUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ThreadScalarWhereInput!]
  updateMany: [ThreadUpdateManyWithWhereNestedInput!]
}

input ThreadUpdateManyWithoutForumInput {
  create: [ThreadCreateWithoutForumInput!]
  delete: [ThreadWhereUniqueInput!]
  connect: [ThreadWhereUniqueInput!]
  set: [ThreadWhereUniqueInput!]
  disconnect: [ThreadWhereUniqueInput!]
  update: [ThreadUpdateWithWhereUniqueWithoutForumInput!]
  upsert: [ThreadUpsertWithWhereUniqueWithoutForumInput!]
  deleteMany: [ThreadScalarWhereInput!]
  updateMany: [ThreadUpdateManyWithWhereNestedInput!]
}

input ThreadUpdateManyWithWhereNestedInput {
  where: ThreadScalarWhereInput!
  data: ThreadUpdateManyDataInput!
}

input ThreadUpdateOneRequiredWithoutPostsInput {
  create: ThreadCreateWithoutPostsInput
  update: ThreadUpdateWithoutPostsDataInput
  upsert: ThreadUpsertWithoutPostsInput
  connect: ThreadWhereUniqueInput
}

input ThreadUpdateWithoutAuthorDataInput {
  threadnumber: Int
  forum: ForumUpdateOneRequiredWithoutThreadsInput
  title: String
  posts: PostUpdateManyWithoutThreadInput
}

input ThreadUpdateWithoutForumDataInput {
  threadnumber: Int
  author: UserUpdateOneRequiredWithoutThreadsInput
  title: String
  posts: PostUpdateManyWithoutThreadInput
}

input ThreadUpdateWithoutPostsDataInput {
  threadnumber: Int
  forum: ForumUpdateOneRequiredWithoutThreadsInput
  author: UserUpdateOneRequiredWithoutThreadsInput
  title: String
}

input ThreadUpdateWithWhereUniqueWithoutAuthorInput {
  where: ThreadWhereUniqueInput!
  data: ThreadUpdateWithoutAuthorDataInput!
}

input ThreadUpdateWithWhereUniqueWithoutForumInput {
  where: ThreadWhereUniqueInput!
  data: ThreadUpdateWithoutForumDataInput!
}

input ThreadUpsertWithoutPostsInput {
  update: ThreadUpdateWithoutPostsDataInput!
  create: ThreadCreateWithoutPostsInput!
}

input ThreadUpsertWithWhereUniqueWithoutAuthorInput {
  where: ThreadWhereUniqueInput!
  update: ThreadUpdateWithoutAuthorDataInput!
  create: ThreadCreateWithoutAuthorInput!
}

input ThreadUpsertWithWhereUniqueWithoutForumInput {
  where: ThreadWhereUniqueInput!
  update: ThreadUpdateWithoutForumDataInput!
  create: ThreadCreateWithoutForumInput!
}

input ThreadWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  threadnumber: Int
  threadnumber_not: Int
  threadnumber_in: [Int!]
  threadnumber_not_in: [Int!]
  threadnumber_lt: Int
  threadnumber_lte: Int
  threadnumber_gt: Int
  threadnumber_gte: Int
  forum: ForumWhereInput
  author: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ThreadWhereInput!]
  OR: [ThreadWhereInput!]
  NOT: [ThreadWhereInput!]
}

input ThreadWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  threads(where: ThreadWhereInput, orderBy: ThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thread!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  email: String!
  password: String!
  threads: ThreadCreateManyWithoutAuthorInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutThreadsInput {
  create: UserCreateWithoutThreadsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  username: String!
  email: String!
  password: String!
  threads: ThreadCreateManyWithoutAuthorInput
}

input UserCreateWithoutThreadsInput {
  username: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  threads: ThreadUpdateManyWithoutAuthorInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutThreadsInput {
  create: UserCreateWithoutThreadsInput
  update: UserUpdateWithoutThreadsDataInput
  upsert: UserUpsertWithoutThreadsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  username: String
  email: String
  password: String
  threads: ThreadUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutThreadsDataInput {
  username: String
  email: String
  password: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutThreadsInput {
  update: UserUpdateWithoutThreadsDataInput!
  create: UserCreateWithoutThreadsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  threads_every: ThreadWhereInput
  threads_some: ThreadWhereInput
  threads_none: ThreadWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`