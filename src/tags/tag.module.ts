import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagService } from "./tags.service";
import { TagSchema } from "./schema/tag.schema";
import { TagController } from "./tag.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'tag', schema: TagSchema }]),
  ],
  providers: [TagService],
  controllers: [TagController],
  exports: [MongooseModule],
})
export class TagModule {}
