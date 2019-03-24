import { prisma } from '../src/generated/prisma-client';

async function main() {
  const user1 = await prisma.createUser({
    name: 'Alice',
    email: 'a@a.com',
    password: '$2b$10$/vo3mAlTzCkQP87VDAvIG.uyoXOqKjaL4aFsWtir3G/.7LjXAsaNu' // 1
  });
  console.log(`Created new user: ${user1.name} (ID: ${user1.id})`);


  const user2 = await prisma.createUser({
    name: 'Bob',
    email: 'b@b.com',
    password: '$2b$10$fAucUtyfJIsoCw26McaLvOTZYptPZ8imix/nlAK/JaBMdWuXfmxb2' // 2
  });
  console.log(`Created new user: ${user2.name} (ID: ${user2.id})`);

  const allUsers = await prisma.users();
  console.log(allUsers);
}

main().catch(e => console.error(e));