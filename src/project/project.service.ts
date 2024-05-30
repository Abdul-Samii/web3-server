import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Project } from './interfaces/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';
import { CoreCategory } from 'src/core-category/interfaces/core-category.interface';
import { Tag } from 'src/tags/interfaces/tag.interface';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('project') private readonly projectModel: Model<Project>,
    @InjectModel('coreCategory') private readonly coreCategoryModel: Model<CoreCategory>,
    @InjectModel('tag') private readonly tagModel: Model<Tag>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    // Fetch categories and tags based on IDs in createProjectDto
    const categories = await this.coreCategoryModel.find({ _id: { $in: createProjectDto.coreCategories }});
    const tags = await this.tagModel.find({ _id: { $in: createProjectDto.tags }});

    // Create a new object combining the original DTO with the fetched categories and tags
    const projectData = {
      ...createProjectDto,
      coreCategories: categories,
      tags: tags,
    };

    // Create the new project with the updated data
    const createdProject = await this.projectModel.create(projectData);
    return createdProject;
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().populate([
      { path: 'coreCategories', model: 'coreCategory' },
      { path: 'tags', model: 'tag' },
    ]);
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findOne({ _id: id }).populate([
      { path: 'coreCategories', model: 'coreCategory' },
      { path: 'tags', model: 'tag' },
    ]);
  }

  async searchProjects(searchValue: string): Promise<Project[]> {
    const searchQuery: any = {};
  
    if (searchValue) {
      searchQuery.$or = [
        { name: { $regex: searchValue, $options: 'i' } },
        { overview: { $regex: searchValue, $options: 'i' } }
      ];
    }

    return this.projectModel.find(searchQuery).populate([
      { path: 'coreCategories', model: 'coreCategory' },
      { path: 'tags', model: 'tag' },
    ]);
  }
}
