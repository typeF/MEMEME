import { prismaObjectType } from "nexus-prisma";

export const Thread = prismaObjectType({
  name: "Thread",
  definition(t) {
    t.prismaFields(["id", "title", "threadnumber", "forum"]);
  }
});
