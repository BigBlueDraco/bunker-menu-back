import { Test, TestingModule } from '@nestjs/testing';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from '../service/category.service';
import { Category } from '../entities/category.entity';
import {PrismaService} from "../../prisma/service/prisma.service";

const categoriesMock = [
  {
    id: 26,
    name: 'Test3',
  },
  {
    id: 1,
    name: 'Test',
  },
  {
    id: 2,
    name: 'Test2',
  }

];

describe('CategoryResolver', () => {
  let categoryResolver: CategoryResolver;
  let categoryService: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryResolver, CategoryService, PrismaService],
    }).compile();

    categoryResolver = module.get<CategoryResolver>(CategoryResolver);
    categoryService = module.get<CategoryService>(CategoryService);
  });

  describe('createCategory', () => {
    it('should create a new category', async () => {
      const expectedResult = categoriesMock[0]
      const result = await categoryResolver.createCategory(categoriesMock[0]);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of all categories', async () => {
      const expectedResult: Category[] = categoriesMock
      const result = await categoryResolver.findAll();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a category by id', async () => {
      const expectedResult: Category = categoriesMock[0]
      const result = await categoryResolver.findOne(categoriesMock[0].id);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('updateCategory', () => {
    it('should update a category', async () => {
      const newName = 'TestName'
      const expectedResult: Category =   {
            id: categoriesMock[0].id,
            name:newName,
          }
      const result = await categoryResolver.updateCategory({id:categoriesMock[0].id, name: newName});
      expect(result).toEqual(expectedResult);
    });
  });

  describe('removeCategory', () => {
    it('should remove a category by id', async () => {
      const expectedResult: Category =  {
        id: categoriesMock[0].id,
        name:'TestName',
      }
      const result = await categoryResolver.removeCategory(categoriesMock[0].id);
      expect(result).toEqual(expectedResult);
    });
  });
});