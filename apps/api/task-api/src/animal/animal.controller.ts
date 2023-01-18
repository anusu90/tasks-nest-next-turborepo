import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/user/guards/auth.gaurd';
import { AnimalService } from './animal.service';

@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}
  @Get('/')
  @UseGuards(AuthGuard)
  async findAll() {
    return await this.animalService.getAllAnimals();
  }
}
