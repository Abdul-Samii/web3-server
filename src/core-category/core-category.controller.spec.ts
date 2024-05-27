import { Test, TestingModule } from '@nestjs/testing';
import { CoreCategoryController } from './core-category.controller';

describe('CoreCategoryController', () => {
  let controller: CoreCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreCategoryController],
    }).compile();

    controller = module.get<CoreCategoryController>(CoreCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
