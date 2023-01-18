import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}
  async getAllAnimals() {
    return await this.animalModel.find();
  }
}
