import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Kingdom } from 'src/models/constant';

@Schema()
class Bird {
  @Prop({ type: String, enum: Object.values(Kingdom), required: true })
  kingdom: string;

  @Prop({ type: String, required: true })
  species: string;

  @Prop({ type: String, required: true })
  name: string;
}

const BirdSchema = SchemaFactory.createForClass(Bird);
type BirdDocument = HydratedDocument<Bird>;

export { Bird, BirdSchema, BirdDocument };
