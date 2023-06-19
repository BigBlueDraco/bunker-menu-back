import { PrismaClient } from '@prisma/client';
import dataBaseMock from './mockData/mockData';

const prismaClient = new PrismaClient();

async function main() {
  console.log('seeding...');
  dataBaseMock.dataBaseMock.forEach(async (elem) => {
    await prismaClient.category.create({
      data: elem,
    });
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
