import { PrismaClient } from '@prisma/client';
import {
  readMockDataFile,
  generateMockDataFile,
} from './mockData/mockDataControler';

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
  const existMock = readMockDataFile();

  if (existMock === undefined || existMock.length === 0) {
    console.log('Mock data dosent exxist');
    console.log('Generating MockData');
    generateMockDataFile();
    const data = readMockDataFile();
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
