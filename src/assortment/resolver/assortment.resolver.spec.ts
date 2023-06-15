import { Test, TestingModule } from '@nestjs/testing';
import { AssortmentResolver } from './assortment.resolver';
import { AssortmentService } from '../service/assortment.service';

describe('AssortmentResolver', () => {
  let resolver: AssortmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssortmentResolver, AssortmentService],
    }).compile();

    resolver = module.get<AssortmentResolver>(AssortmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
