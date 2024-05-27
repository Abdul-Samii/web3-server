import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ProjectSchema } from "./schema/project.schema";
import { SeedService } from "src/seed";
import { CoreCategoryModule } from "src/core-category/core-category.module";
import { TagModule } from "src/tags/tag.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'project', schema: ProjectSchema }]),
    CoreCategoryModule,
    TagModule,
  ],
  providers: [ProjectService],
  controllers: [ProjectController],
  exports: [MongooseModule]
})
export class ProjectModule {}
