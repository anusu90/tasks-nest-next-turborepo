import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bird, BirdSchema } from './bird.entity';
import { BirdController } from './bird.controller';
import { BirdService } from './bird.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bird.name, schema: BirdSchema }]),
  ],
  controllers: [BirdController],
  providers: [BirdService],
})
export class BirdModule {}
