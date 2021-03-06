import { prismaObjectType } from 'nexus-prisma';

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields([
      'id',
      'username',
      'email',
      'password'
    ]);
  }
});