import { prisma } from "../src/generated/prisma-client";

async function main() {
  const forum1 = await prisma.createForum({
    name: "Advice"
  });
  console.log(`Created new subForum: ${forum1.name} (ID: ${forum1.id})`);

  const forum2 = await prisma.createForum({
    name: "Funny"
  });
  console.log(`Created new subForum: ${forum2.name} (ID: ${forum2.id})`);

  const forum3 = await prisma.createForum({
    name: "General"
  });
  console.log(`Created new subForum: ${forum3.name} (ID: ${forum3.id})`);

  const forum4 = await prisma.createForum({
    name: "Meetup"
  });
  console.log(`Created new subForum: ${forum4.name} (ID: ${forum4.id})`);

  const forum5 = await prisma.createForum({
    name: "Wut"
  });
  console.log(`Created new subForum: ${forum5.name} (ID: ${forum5.id})`);

  const forum6 = await prisma.createForum({
    name: "Dance Off"
  });
  console.log(`Created new subForum: ${forum6.name} (ID: ${forum6.id})`);

  const user1 = await prisma.createUser({
    username: "100yr Old Grandma",
    email: "100yrgrandma@mememe.com",
    password: "$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2" // 2
  });
  console.log(`Created new user: ${user1.username} (ID: ${user1.id})`);

  const user2 = await prisma.createUser({
    username: "Alice",
    email: "alice@mememe.com",
    password: "$2b$10$/vo3mAlTzCkQP87VDAvIG.uyoXOqKjaL4aFsWtir3G/.7LjXAsaNu" // 1
  });
  console.log(`Created new user: ${user2.username} (ID: ${user2.id})`);

  const user3 = await prisma.createUser({
    username: "Bob",
    email: "bob@mememe.com",
    password: "$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2" // 2
  });
  console.log(`Created new user: ${user3.username} (ID: ${user3.id})`);

  const user4 = await prisma.createUser({
    username: "Chicken",
    email: "chicken@mememe.com",
    password: "$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2" // 2
  });
  console.log(`Created new user: ${user4.username} (ID: ${user4.id})`);

  const user5 = await prisma.createUser({
    username: "Dinosaur",
    email: "dinosaur@mememe.com",
    password: "$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2" // 2
  });
  console.log(`Created new user: ${user5.username} (ID: ${user5.id})`);

  const thread1 = await prisma.createThread({
    forum: { connect: { id: forum1.id } },
    author: { connect: { id: user1.id } },
    threadnumber: 1,
    title: "Why isn't my toilet working?",
    posts: {
      create: [
        {
          author: { connect: { id: user1.id } },
          postnumber: 1,
          content: "https://media3.giphy.com/media/26FxL6qSP2ZvjVCne/giphy.gif"
        },
        {
          author: { connect: { id: user2.id } },
          postnumber: 2,
          content: "https://media1.giphy.com/media/Nmmb3MW2tABiw/giphy.gif"
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread1.title} (ID: ${thread1.id})`);

  const thread2 = await prisma.createThread({
    forum: { connect: { id: forum1.id } },
    author: { connect: { id: user5.id } },
    threadnumber: 2,
    title: "How to use arms?",
    posts: {
      create: [
        {
          author: { connect: { id: user5.id } },
          postnumber: 1,
          content: "https://media2.giphy.com/media/ohrQCO48drf3i/giphy.gif"
        },
        {
          author: { connect: { id: user3.id } },
          postnumber: 2,
          content: "https://media1.giphy.com/media/kaiMtgAyxsure/giphy.gif"
        },
        {
          author: { connect: { id: user5.id } },
          postnumber: 3,
          content: "https://media3.giphy.com/media/3o72F2nElAKzDKQfYs/giphy.gif"
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread2.title} (ID: ${thread2.id})`);

  const thread3 = await prisma.createThread({
    forum: { connect: { id: forum2.id } },
    author: { connect: { id: user1.id } },
    threadnumber: 3,
    title: "LOL",
    posts: {
      create: [
        {
          author: { connect: { id: user3.id } },
          postnumber: 1,
          content: "https://media0.giphy.com/media/ZqlvCTNHpqrio/giphy.gif"
        },
        {
          author: { connect: { id: user1.id } },
          postnumber: 2,
          content: "https://media1.giphy.com/media/XEIfzDne3lA2sY9qyR/giphy.gif"
        },
        {
          author: { connect: { id: user2.id } },
          postnumber: 3,
          content: "https://media1.giphy.com/media/9MFsKQ8A6HCN2/giphy.gif"
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread3.title} (ID: ${thread3.id})`);

  const thread4 = await prisma.createThread({
    forum: { connect: { id: forum3.id } },
    author: { connect: { id: user3.id } },
    threadnumber: 4,
    title: "Hello!",
    posts: {
      create: [
        {
          author: { connect: { id: user3.id } },
          postnumber: 1,
          content: "https://media3.giphy.com/media/l0FF56cexcW2JAXCJj/giphy.gif"
        },
        {
          author: { connect: { id: user2.id } },
          postnumber: 2,
          content: "https://media0.giphy.com/media/3o7Zev9BdpMC9y11za/giphy.gif"
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread4.title} (ID: ${thread4.id})`);

  const thread5 = await prisma.createThread({
    forum: { connect: { id: forum4.id } },
    author: { connect: { id: user5.id } },
    threadnumber: 5,
    title: "Party at my place tomorrow?",
    posts: {
      create: [
        {
          author: { connect: { id: user4.id } },
          postnumber: 1,
          content: "https://media0.giphy.com/media/wBKSLCTCQpWHS/giphy.gif"
        },
        {
          author: { connect: { id: user2.id } },
          postnumber: 2,
          content: "https://media0.giphy.com/media/e1w0OKeAjOEw/giphy.gif"
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread5.title} (ID: ${thread5.id})`);

  const thread6 = await prisma.createThread({
    forum: { connect: { id: forum5.id } },
    author: { connect: { id: user5.id } },
    threadnumber: 6,
    title: "FDSA",
    posts: {
      create: [
        {
          author: { connect: { id: user5.id } },
          postnumber: 1,
          content: "https://media2.giphy.com/media/l3Ucuasj3Ahh6UsfK/giphy.gif"
        },
        {
          author: { connect: { id: user2.id } },
          postnumber: 2,
          content: "https://media3.giphy.com/media/6qjpWQ471K3xS/giphy.gif"
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread6.title} (ID: ${thread6.id})`);

  const thread7 = await prisma.createThread({
    forum: { connect: { id: forum6.id } },
    author: { connect: { id: user5.id } },
    threadnumber: 7,
    title: "Superheroes",
    posts: {
      create: [
        {
          author: { connect: { id: user5.id } },
          postnumber: 1,
          content: "https://media0.giphy.com/media/QgCwRigEAxqGQ/giphy.gif"
        },
        {
          author: { connect: { id: user2.id } },
          postnumber: 2,
          content: "https://media0.giphy.com/media/IdCMQK3As2y8Fj7ZMU/giphy.gif"
        }
      ]
    }
  });
  console.log(`Created new thread: ${thread7.title} (ID: ${thread7.id})`);

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
