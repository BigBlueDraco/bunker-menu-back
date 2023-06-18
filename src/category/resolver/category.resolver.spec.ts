import { Test, TestingModule } from '@nestjs/testing';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from '../service/category.service';
import { Category } from '../entities/category.entity';
import { CreateCategoryInput } from '../dto/create-category.input';
import { UpdateCategoryInput } from '../dto/update-category.input';
import {PrismaService} from "../../prisma/service/prisma.service";
import {PrismaModule} from "../../prisma/prisma.module";

describe('CategoryResolver', () => {
  let categoryResolver: CategoryResolver;
  let categoryService: CategoryService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryResolver, CategoryService, PrismaService],
      imports:[PrismaModule]
    }).compile();

    categoryResolver = module.get<CategoryResolver>(CategoryResolver);
    categoryService = module.get<CategoryService>(CategoryService);
    prismaService = module.get<PrismaService>(PrismaService)
  });

  describe('createCategory', () => {
    it('should create a new category', async () => {

      const createCategoryInput: CreateCategoryInput = {
        name: 'Test Category',
      };
      const createdCategory: Category = {
        id: 1,
        name: 'Test Category',
      };
      jest.spyOn(categoryService, 'create').mockResolvedValue(createdCategory);

      const result = await categoryResolver.createCategory(createCategoryInput);

      expect(categoryService.create).toHaveBeenCalledWith(createCategoryInput);
      expect(result).toEqual(createdCategory);
    });
  });

  describe('findAll', () => {
    it('should return an array of all categories', async () => {
      const categories: Category[] = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
      ];
      jest.spyOn(categoryService, 'findAll').mockResolvedValue(categories);

      const result = await categoryResolver.findAll();

      expect(categoryService.findAll).toHaveBeenCalled();
      expect(result).toEqual(categories);
    });
  });

  describe('findOne', () => {
    it('should return a category by id', async () => {
      const categoryId = 1;
      const category: Category = { id: categoryId, name: 'Category 1' };
      jest.spyOn(categoryService, 'findOne').mockResolvedValue(category);

      const result = await categoryResolver.findOne(categoryId);

      expect(categoryService.findOne).toHaveBeenCalledWith(categoryId);
      expect(result).toEqual(category);
    });
  });

  describe('updateCategory', () => {
    it('should update a category', async () => {
      const updateCategoryInput: UpdateCategoryInput = {
        id: 1,
        name: 'Updated Category',
      };
      const updatedCategory: Category = {
        id: 1,
        name: 'Updated Category',
      };
      jest.spyOn(categoryService, 'update').mockResolvedValue(updatedCategory);

      const result = await categoryResolver.updateCategory(updateCategoryInput);

      expect(categoryService.update).toHaveBeenCalledWith(
          updateCategoryInput.id,
          updateCategoryInput
      );
      expect(result).toEqual(updatedCategory);
    });
  });

  describe('removeCategory', () => {
    it('should remove a category by id', async () => {

      const categoryId = 1;
      const removedCategory: Category = { id: categoryId, name: 'Removed Category' };
      jest.spyOn(categoryService, 'remove').mockResolvedValue(removedCategory);

      const result = await categoryResolver.removeCategory(categoryId);

      expect(categoryService.remove).toHaveBeenCalledWith(categoryId);
      expect(result).toEqual(removedCategory);
    });
  });
});
