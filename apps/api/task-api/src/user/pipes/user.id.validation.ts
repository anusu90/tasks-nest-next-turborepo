import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

@Injectable()
export class ObjectIdValidationPipe implements PipeTransform {
  transform(value: ObjectId, metadata: ArgumentMetadata) {
    console.log(metadata);
    if (isMongoId(value)) return value;
    throw new BadRequestException();
  }
}
