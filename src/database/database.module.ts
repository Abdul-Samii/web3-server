import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dev:dev@cluster0.nbibm07.mongodb.net/web3?retryWrites=true&w=majority&appName=Cluster0'),
  ],
})
export class DatabaseModule {}
