import { Test, TestingModule } from '@nestjs/testing';
import { HookahService } from './hookah.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';

const hookahMock = [
  {
    id: 56,
    name: 'Test',
  },
];
describe('HookahService', () => {
  let service: HookahService;
  let prisma: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HookahService, PrismaService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    service = module.get<HookahService>(HookahService);

    await prisma.cleanDatabase();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
