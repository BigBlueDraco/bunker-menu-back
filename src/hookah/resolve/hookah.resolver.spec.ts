import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLError } from 'graphql';

import { HookahResolver } from './hookah.resolver';
import { HookahService } from '../service/hookah.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { readMockDataFile } from '../../../prisma/mockData/mockDataControler';
import { UpdateHookahInput } from '../dto/update-hookah.input';

describe('HookahResolver', () => {
  let resolver: HookahResolver;
  let mock;
  let itemId;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HookahResolver, HookahService, PrismaService],
    }).compile();

    mock = await readMockDataFile();

    resolver = module.get<HookahResolver>(HookahResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findHookah', () => {
    it('should find and return a list of hookahs', async () => {
      const result = await resolver.findAll();
      expect(result).toEqual(
        mock[0].hookahs.create.map((elem, index) => ({
          id: 1 + index,
          mainCategoryId: 1,
          ...elem,
        })),
      );
    });

    it('should find and return a hookah', async () => {
      const result = await resolver.findOne(1);
      expect(result).toEqual({
        id: 1,
        mainCategoryId: 1,
        ...mock[0].hookahs.create[0],
      });
    });
    it('should throw GraphQLError when hookah with the specified id does not exist', async () => {
      const nonExistingHookahId = -1;

      await expect(resolver.findOne(nonExistingHookahId)).rejects.toThrow(
        GraphQLError,
      );
    });
  });

  describe('createHookah', () => {
    it('should create a hookah', async () => {
      const createHookahInput = {
        name: 'test',
        price: 250,
        mainCategoryId: 1,
      };

      const createdHookah = {
        id: 4,
        mainCategoryId: 1,
        ...createHookahInput,
      };

      const createdRes = await resolver.createHookah(createHookahInput);
      const result = await resolver.findOne(createdRes.id);
      itemId = createdRes.id;
      expect(createdRes).toEqual({ id: result.id, ...createHookahInput });
    });
    it('should throw GraphQLError when try create hookah with name exist', async () => {
      const existHookahInput = {
        name: 'test',
        price: 250,
        mainCategoryId: 1,
      };
      await expect(resolver.createHookah(existHookahInput)).rejects.toThrow(
        GraphQLError,
      );
    });
  });

  describe('updateHookah', () => {
    it('should update a hookah', async () => {
      const updateHookahInput: UpdateHookahInput = {
        id: itemId,
        name: 'updateTest',
        price: 250,
        mainCategoryId: 1,
      };

      const updatedRes = await resolver.updateHookah(updateHookahInput);
      expect(updatedRes).toEqual({ id: itemId, ...updateHookahInput });
    });
    it('should throw GraphQLError when try update hookah with the specified id does not exist', async () => {
      const nonExistingHookahId = -1;
      const updateHookahInput: UpdateHookahInput = {
        id: nonExistingHookahId,
        name: 'updateTest',
        price: 250,
        mainCategoryId: 1,
      };

      await expect(resolver.updateHookah(updateHookahInput)).rejects.toThrow(
        GraphQLError,
      );
    });
  });

  describe('removeHookah', () => {
    it('should remove a hookah', async () => {
      const removeHookahInput: UpdateHookahInput = {
        id: itemId,
        name: 'updateTest',
        price: 250,
        mainCategoryId: 1,
      };

      const removedRes = await resolver.removeHookah(itemId);
      expect(removedRes).toEqual({ id: itemId, ...removeHookahInput });
    });
    it('should throw GraphQLError when try remove hookah with the specified id does not exist', async () => {
      const nonExistingHookahId = -1;

      await expect(resolver.removeHookah(nonExistingHookahId)).rejects.toThrow(
        GraphQLError,
      );
    });
  });
});
