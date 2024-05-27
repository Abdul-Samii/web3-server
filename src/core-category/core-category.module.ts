import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CoreCategoryService } from "./core-category.service";
import { CoreCategoryController } from "./core-category.controller";
import { CoreCategorySchema } from "./schema/core-category.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'coreCategory', schema: CoreCategorySchema }]),
  ],
  providers: [CoreCategoryService],
  controllers: [CoreCategoryController],
  exports: [MongooseModule],
})
export class CoreCategoryModule {}
