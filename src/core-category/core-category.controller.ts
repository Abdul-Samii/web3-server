import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoreCategoryService } from './core-category.service';
import { CoreCategory } from './interfaces/core-category.interface';
import { CreateCoreCategoryDto } from './dto/create-core-category.dto';

@Controller('core-category')
export class CoreCategoryController {
  constructor(private readonly coreCategoryService: CoreCategoryService) {}

  @Post()
  async create(@Body() createCoreCategory: CreateCoreCategoryDto) {
    return this.coreCategoryService.create(createCoreCategory);
  }

  @Get()
  async findAll(): Promise<CoreCategory[]> {
    return this.coreCategoryService.findAll();
  }
}
