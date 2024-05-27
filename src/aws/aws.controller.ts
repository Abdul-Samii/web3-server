import { Controller, Get, Query } from '@nestjs/common';
import { AwsService } from './aws.service';

@Controller('aws')
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @Get('s3/presigned-url')
  async getPresignedUrl(): Promise<string> {
    return this.awsService.generatePresignedUrl();
  }
}
