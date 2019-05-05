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

  // const forum3 = await prisma.createForum({
  //   name: 'Meetup'
  // });
  // console.log(`Created new subForum: ${forum3.name} (ID: ${forum3.id})`);

  // const forum4 = await prisma.createForum({
  //   name: 'Buy & Sell'
  // });
  // console.log(`Created new subForum: ${forum4.name} (ID: ${forum4.id})`);

  // const forum5 = await prisma.createForum({
  //   name: 'Serious'
  // });
  // console.log(`Created new subForum: ${forum5.name} (ID: ${forum5.id})`);

  // const forum6 = await prisma.createForum({
  //   name: '???'
  // });
  // console.log(`Created new subForum: ${forum6.name} (ID: ${forum6.id})`);

  const user1 = await prisma.createUser({
    username: '100yr Old Grandma',
    email: '100yrgrandma@mememe.com',
    password: '$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2' // 2
  });
  console.log(`Created new user: ${user1.username} (ID: ${user1.id})`);

  const user2 = await prisma.createUser({
    username: 'Alice',
    email: 'alice@mememe.com',
    password: '$2b$10$/vo3mAlTzCkQP87VDAvIG.uyoXOqKjaL4aFsWtir3G/.7LjXAsaNu' // 1
  });
  console.log(`Created new user: ${user2.username} (ID: ${user2.id})`);

  const user3 = await prisma.createUser({
    username: 'Bob',
    email: 'bob@mememe.com',
    password: '$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2' // 2
  });
  console.log(`Created new user: ${user3.username} (ID: ${user3.id})`);

  const user4 = await prisma.createUser({
    username: 'Chicken',
    email: 'chicken@mememe.com',
    password: '$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2' // 2
  });
  console.log(`Created new user: ${user4.username} (ID: ${user4.id})`);

  const user5 = await prisma.createUser({
    username: 'Dinosaur',
    email: 'dinosaur@mememe.com',
    password: '$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2' // 2
  });
  console.log(`Created new user: ${user5.username} (ID: ${user5.id})`);

  const thread1 = await prisma.createThread({
    forum: { connect: { id: forum1.id } },
    author: { connect: { id: user1.id } },
    threadnumber: 1,
    title: "Advice Thread 1",
    posts: {
      create: [
        {
          author: { connect: { id: user1.id } },
          postnumber: 1,
          content: 'https://media.giphy.com/media/5nPodXMLXXd1m/giphy.gif'
        }, {
          author: { connect: { id: user2.id } },
          postnumber: 2,
          content: 'Advice1SecondPost.gif'
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread1.title} (ID: ${thread1.id})`);

  const thread2 = await prisma.createThread({
    forum: { connect: { id: forum1.id } },
    author: { connect: { id: user2.id } },
    threadnumber: 2,
    title: "Advice Thread 2",
    posts: {
      create: [
        {
          author: { connect: { id: user2.id } },
          postnumber: 1,
          content: 'Advice2FirstPost.gif'
        }, {
          author: { connect: { id: user1.id } },
          postnumber: 2,
          content: 'Advice2SecondPost.gif'
        }, {
          author: { connect: { id: user2.id } },
          postnumber: 3,
          content: 'Advice2ThirdPost.gif'
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread2.title} (ID: ${thread2.id})`);

  const thread3 = await prisma.createThread({
    forum: { connect: { id: forum2.id } },
    author: { connect: { id: user1.id } },
    threadnumber: 1,
    title: "General Thread 1",
    posts: {
      create: [
        {
          author: { connect: { id: user1.id } },
          postnumber: 1,
          content: 'https://media.giphy.com/media/6xtsQKAsYh25a/giphy.gif'
        }, {
          author: { connect: { id: user2.id } },
          postnumber: 2,
          content: 'General1SecondPost.gif'
        }, {
          author: { connect: { id: user2.id } },
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