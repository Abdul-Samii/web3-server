import { Test, TestingModule } from '@nestjs/testing';
import { CoreCategoryService } from './core-category.service';

describe('CoreCategoryService', () => {
  let service: CoreCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreCategoryService],
    }).compile();

    service = module.get<CoreCategoryService>(CoreCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
