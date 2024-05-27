import { Injectable } from '@nestjs/common';
import { SeedService } from './seed';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './project/interfaces/project.interface';
import { CoreCategory } from './core-category/interfaces/core-category.interface';
import { Tag } from './tags/interfaces/tag.interface';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('project') private readonly projectModel: Model<Project>,
    @InjectModel('coreCategory') private readonly coreCategoryModel: Model<CoreCategory>,
    @InjectModel('tag') private readonly tagModel: Model<Tag>
  ) {
    // const seedService = new SeedService(projectModel, coreCategoryModel, tagModel);
    // seedService.seed()
  }
  getHello(): string {
    return 'Hello World!';
  }
}
