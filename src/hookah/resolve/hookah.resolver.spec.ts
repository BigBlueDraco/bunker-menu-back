import { Test, TestingModule } from '@nestjs/testing';
import { HookahResolver } from './hookah.resolver';
import { HookahService } from '../service/hookah.service';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';

describe('HookahResolver', () => {
  let resolver: HookahResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HookahResolver, HookahService, PrismaService],
    }).compile();

    resolver = module.get<HookahResolver>(HookahResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
