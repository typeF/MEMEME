import { prismaObjectType } from 'nexus-prisma';

export const Forum = prismaObjectType({
  name: 'Forum',
  definition(t) {
    t.prismaFields([
      'id',
      'name',
      'threads'
    ]);
  }
});