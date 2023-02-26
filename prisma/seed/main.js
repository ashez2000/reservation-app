const { PrismaClient } = require('@prisma/client');
const restaurents = require('./restaurents');

const prisma = new PrismaClient();

async function main() {
  await prisma.restaurant.deleteMany();

  for (let i of restaurents) {
    await prisma.restaurant.create({ data: i });
  }

  const res = await prisma.restaurant.findMany();
  console.log(res);
}

main();
