import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from './interfaces/tag.interface';
import { CreateTagDto } from './dto/tag.dto';

@Injectable()
export class TagService {
  constructor(@InjectModel('tag') private readonly tagModel: Model<Tag>) {}

  async create(createTag: CreateTagDto): Promise<Tag> {
    const createdProject = new this.tagModel(createTag);
    return createdProject.save();
  }

  async findAll(): Promise<Tag[]> {
    return this.tagModel.find().exec();
  }
}
