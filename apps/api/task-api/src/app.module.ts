import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AnimalModule } from './animal/animal.module';
import { BirdModule } from './bird/bird.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
      dbName: 'nest-task',
    }),
    UserModule,
    AnimalModule,
    BirdModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
