import { Test, TestingModule } from '@nestjs/testing';
import { CoffeService } from './coffe.service';

describe('CoffeService', () => {
  let provider: CoffeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeService],
    }).compile();

    provider = module.get<CoffeService>(CoffeService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
