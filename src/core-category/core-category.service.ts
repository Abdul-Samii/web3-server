import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoreCategory } from './interfaces/core-category.interface';
import { CreateCoreCategoryDto } from './dto/create-core-category.dto';

@Injectable()
export class CoreCategoryService {
  constructor(@InjectModel('coreCategory') private readonly coreCategoryModel: Model<CoreCategory>) {}

  async create(createCoreCategory: CreateCoreCategoryDto): Promise<CoreCategory> {
    const createdProject = new this.coreCategoryModel(createCoreCategory);
    return createdProject.save();
  }

  async findAll(): Promise<CoreCategory[]> {
    return this.coreCategoryModel.find().exec();
  }
}
