import { Prisma, PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.$queryRaw`DELETE  FROM "Category" CASCADE`;

  console.log('seeding...');
  await prismaClient.category.create({
    data: {
      name: 'Seed name 123',
    },
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
