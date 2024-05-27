import { Controller, Get, Post, Body } from '@nestjs/common';
import { TagService } from './tags.service';
import { Tag } from './interfaces/tag.interface';
import { CreateTagDto } from './dto/tag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async create(@Body() createTag: CreateTagDto) {
    return this.tagService.create(createTag);
  }

  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }
}
