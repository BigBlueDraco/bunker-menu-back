import { Test, TestingModule } from '@nestjs/testing';
import { HookahResolver } from './hookah.resolver';
import { HookahService } from '../service/hookah.service';

describe('HookahResolver', () => {
  let resolver: HookahResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HookahResolver, HookahService],
    }).compile();

    resolver = module.get<HookahResolver>(HookahResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
