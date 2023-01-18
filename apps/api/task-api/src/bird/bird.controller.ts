import { Controller, Get } from '@nestjs/common';
import { BirdService } from './bird.service';

@Controller('bird')
export class BirdController {
  constructor(private birdService: BirdService) {}
  @Get()
  async findAll() {
    return await this.birdService.getAllBirds();
  }
}
