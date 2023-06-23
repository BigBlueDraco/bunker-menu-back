import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLError } from 'graphql';

import { HookahResolver } from './hookah.resolver';
import { HookahService } from '../service/hookah.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { readMockDataFile } from '../../../prisma/mockData/mockDataControler';

describe('HookahResolver', () => {
  let resolver: HookahResolver;
  let mock;

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
    it('should create a hookah', async () => {});
    it('should throw GraphQLError when try create hookah with name exist', async () => {});
  });

  describe('updateHookah', () => {
    it('should update a hookah', async () => {});
    it('should throw GraphQLError when try update hookah with the specified id does not exist', async () => {});
  });

  describe('removeHookah', () => {
    it('should remove a hookah', async () => {});
    it('should throw GraphQLError when try remove hookah with the specified id does not exist', async () => {});
  });
});
