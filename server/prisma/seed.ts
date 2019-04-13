import { prisma } from '../src/generated/prisma-client';

async function main() {

  const forum1 = await prisma.createForum({
    name: 'Advice'
  });
  console.log(`Created new subForum: ${forum1.name} (ID: ${forum1.id})`);

  const forum2 = await prisma.createForum({
    name: 'General'
  });
  console.log(`Created new subForum: ${forum2.name} (ID: ${forum2.id})`);

  const user1 = await prisma.createUser({
    username: 'Alice',
    email: 'a@a.com',
    password: '$2b$10$/vo3mAlTzCkQP87VDAvIG.uyoXOqKjaL4aFsWtir3G/.7LjXAsaNu' // 1
  });
  console.log(`Created new user: ${user1.username} (ID: ${user1.id})`);

  const user2 = await prisma.createUser({
    username: 'Bob',
    email: 'b@b.com',
    password: '$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2' // 2
  });
  console.log(`Created new user: ${user2.username} (ID: ${user2.id})`);

  const thread1 = await prisma.createThread({
    forum: { connect: { id: forum1.id } },
    author: { connect: { id: user1.id }},
    threadnumber: 1,
    title: "Advice Thread 1",
    posts: {
      create: [
        {
          author: { connect: { id: user1.id }},
          postnumber: 1,
          content: 'Advice1FirstPost.gif'
        }, {
          author: { connect: { id: user2.id }},
          postnumber: 2,
          content: 'Advice1SecondPost.gif'
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread1.title} (ID: ${thread1.id})`);

  const thread2 = await prisma.createThread({
    forum: { connect: { id: forum1.id } },
    author: { connect: { id: user2.id }},
    threadnumber: 2,
    title: "Advice Thread 2",
    posts: {
      create: [
        {
          author: { connect: { id: user2.id }},
          postnumber: 1,
          content: 'Advice2FirstPost.gif'
        }, {
          author: { connect: { id: user1.id }},
          postnumber: 2,
          content: 'Advice2SecondPost.gif'
        }, {
          author: { connect: { id: user2.id }},
          postnumber: 3,
          content: 'Advice2ThirdPost.gif'
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread2.title} (ID: ${thread2.id})`);

  const thread3 = await prisma.createThread({
    forum: { connect: { id: forum2.id } },
    author: { connect: { id: user1.id }},
    threadnumber: 1,
    title: "General Thread 1",
    posts: {
      create: [
        {
          author: { connect: { id: user1.id }},
          postnumber: 1,
          content: 'General1FirstPost.gif'
        }, {
          author: { connect: { id: user2.id }},
          postnumber: 2,
          content: 'General1SecondPost.gif'
        }, {
          author: { connect: { id: user2.id }},
          postnumber: 3,
          content: 'General1ThirdPost.gif'
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread3.title} (ID: ${thread3.id})`);

  const allUsers = await prisma.users();
  const allForums = await prisma.forums();
  const allThreads = await prisma.threads();
  const allPosts = await prisma.posts();
  console.log(allUsers);
  console.log(allForums);
  console.log(allThreads);
  console.log(allPosts);
}

main().catch(e => console.error(e));