import { faker } from '@faker-js/faker';
import { writeFileSync, readFileSync } from 'fs';
const shortid = require('shortid');

export function generateMockDataFile() {
  const assortmentFirstDish = [];
  const assortmentSecondDishMock = [];
  const assortmentDessertDishMock = [];

  const createProduct = () => {
    const id = shortid.generate();
    return {
      name: faker.commerce.productName() + `__(${id})`,
      description: faker.commerce.productDescription(),
      price: +faker.commerce.price({ dec: 0, min: 50, max: 1000 }),
    };
  };
  for (let i = 0; i < 100; i++) {
    assortmentFirstDish.push(createProduct());
    assortmentSecondDishMock.push(createProduct());
    assortmentDessertDishMock.push(createProduct());
  }

  const subCategoryMock = [
    {
      name: 'first meals',
      assortment: {
        create: assortmentFirstDish,
      },
    },
    {
      name: 'second meals',
      assortment: {
        create: assortmentSecondDishMock,
      },
    },
    {
      name: 'dessert',
      assortment: {
        create: assortmentDessertDishMock,
      },
    },
  ];
  const hookahMock = [
    { name: 'light', price: 250 },
    { name: 'medium', price: 290 },
    { name: 'dark', price: 300 },
  ];

  saveMockDataFile([
    {
      name: 'hookah',
      hookahs: {
        create: hookahMock,
      },
    },
    {
      name: 'kithen',
      subCategories: {
        create: subCategoryMock,
      },
    },
  ]);
}

export function saveMockDataFile(data: any) {
  writeFileSync(
    './prisma/mockData/MockData.mock.json',
    JSON.stringify(data),
    'utf8',
  );
}

export function readMockDataFile(): any | undefined {
  try {
    const data = readFileSync('./prisma/mockData/MockData.mock.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return undefined;
  }
}
