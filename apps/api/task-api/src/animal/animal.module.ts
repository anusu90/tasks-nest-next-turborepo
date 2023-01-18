import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './animal.entity';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { GoogleAuthClass } from 'src/utils/google-auth';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }]),
  ],
  controllers: [AnimalController],
  providers: [AnimalService, GoogleAuthClass],
})
export class AnimalModule {}
