import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { DatabaseModule } from './database/database.module';
import { CoreCategoryModule } from './core-category/core-category.module';
import { SeedService } from './seed';
import { ProjectService } from './project/project.service';
import { CoreCategoryService } from './core-category/core-category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './project/schema/project.schema';
import { CoreCategorySchema } from './core-category/schema/core-category.schema';
import { TagSchema } from './tags/schema/tag.schema';
import { TagModule } from './tags/tag.module';
import { AwsModule } from './aws/aws.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProjectModule,
    DatabaseModule,
    CoreCategoryModule,
    TagModule,
    AwsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forFeature([
    //   { name: 'project', schema: ProjectSchema },
    //   { name: 'coreCategory', schema: CoreCategorySchema },
    //   { name: 'tag', schema: TagSchema },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService, SeedService, ProjectService, CoreCategoryService],
})
export class AppModule {}
