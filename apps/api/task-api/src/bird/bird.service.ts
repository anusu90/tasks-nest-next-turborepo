import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bird, BirdDocument } from './bird.entity';

@Injectable()
export class BirdService {
  constructor(@InjectModel(Bird.name) private birdModel: Model<BirdDocument>) {}

  async getAllBirds() {
    return await this.birdModel.find();
  }
}
