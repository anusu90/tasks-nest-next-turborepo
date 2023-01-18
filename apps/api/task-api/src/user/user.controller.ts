import { Controller, Get, Param } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ObjectIdValidationPipe } from './pipes/user.id.validation';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get('/:id')
  async getUser(@Param('id', ObjectIdValidationPipe) id: ObjectId) {
    return await this.useService.findById(id);
  }
}
