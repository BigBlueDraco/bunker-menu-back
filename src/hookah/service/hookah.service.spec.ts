import { Test, TestingModule } from '@nestjs/testing';
import { HookahService } from './hookah.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { readMockDataFile } from '../../../prisma/mockData/mockDataControler';
import { UpdateHookahInput } from '../dto/update-hookah.input';

const hookahMock = [
  {
    id: 56,
    name: 'Test',
  },
];
describe('HookahService', () => {
  let service: HookahService;
  let prisma: PrismaService;
  let mock;
  let itemId: number;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HookahService, PrismaService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    service = module.get<HookahService>(HookahService);
    mock = await readMockDataFile();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return the hookah with the specified id', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual({
      id: 1,
      mainCategoryId: 1,
      ...mock[0].hookahs.create[0],
    });
  });
  it('should return all hookah', async () => {
    const result = await service.findAll();
    expect(result).toEqual(
      mock[0].hookahs.create.map((elem, index) => ({
        id: 1 + index,
        mainCategoryId: 1,
        ...elem,
      })),
    );
  });

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

    jest.spyOn(prisma.hookah, 'findUnique').mockResolvedValue(null);
    jest.spyOn(prisma.hookah, 'create').mockResolvedValue(createdHookah);

    const createdRes = await service.create(createHookahInput);
    const result = await service.findOne(createdRes.id);
    itemId = createdRes.id;
    expect(createdRes).toEqual({ id: result.id, ...createHookahInput });
  });
  it('should update a hookah', async () => {
    const updateHookahInput: UpdateHookahInput = {
      id: itemId,
      name: 'updateTest',
      price: 250,
      mainCategoryId: 1,
    };

    const createdHookah = {
      // id: 4,
      mainCategoryId: 1,
      ...updateHookahInput,
    };

    jest.spyOn(prisma.hookah, 'findUnique').mockResolvedValue(null);
    // jest.spyOn(prisma.hookah, 'update').mockResolvedValue(createdHookah);

    const updatedRes = await service.update(itemId, updateHookahInput);
    const result = await service.findOne(updatedRes.id);
    expect(updatedRes).toEqual({ id: itemId, ...updateHookahInput });
    // service.remove(itemId);
  });
  it('should remove a hookah', async () => {
    const removeHookahInput: UpdateHookahInput = {
      id: itemId,
      name: 'updateTest',
      price: 250,
      mainCategoryId: 1,
    };

    const removedRes = await service.remove(itemId);
    expect(removedRes).toEqual({ id: itemId, ...removeHookahInput });
  });
});
