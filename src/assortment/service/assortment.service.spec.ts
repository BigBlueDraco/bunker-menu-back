import { Test, TestingModule } from '@nestjs/testing';
import { AssortmentService } from './assortment.service';

describe('AssortmentService', () => {
  let service: AssortmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssortmentService],
    }).compile();

    service = module.get<AssortmentService>(AssortmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
