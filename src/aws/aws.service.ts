import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AwsService {
  private s3: AWS.S3;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new AWS.S3({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_REGION'),
    });
  }

  async generatePresignedUrl(): Promise<string> {
    const key = `${uuidv4()}.jpeg`; // Generate a unique key for the image

    const params = {
      Bucket: this.configService.get<string>('AWS_BUCKET_NAME'),
      Key: key,
      Expires: 6000, // URL expiration time in seconds
      ContentType: 'image/jpeg', // or the appropriate MIME type
    };

    return this.s3.getSignedUrlPromise('putObject', params);
  }
}
