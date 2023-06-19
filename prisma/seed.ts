import { PrismaClient } from '@prisma/client';
import { readMockData, generateMockData } from './mockData/mockDataControler';

const prismaClient = new PrismaClient();
function setDataToDB(data: any[]) {
  console.log('Setting data to db');
  data.forEach(async (elem) => {
    await prismaClient.category.create({
      data: elem,
    });
  });
}
async function main() {
  console.log('seeding...');
  console.log('Reading mock data');
  const existMock = readMockData();

  if (existMock === undefined) {
    console.log('Mock data dosent exxist');
    console.log('Generating MockData');
    generateMockData();
    const data = readMockData();
    setDataToDB(data);
    return;
  }
  setDataToDB(existMock);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
