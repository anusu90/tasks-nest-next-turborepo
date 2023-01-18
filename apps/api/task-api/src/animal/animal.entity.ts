import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Kingdom } from 'src/models/constant';

@Schema()
class Animal {
  @Prop({ type: String, enum: Object.values(Kingdom), required: true })
  kingdom: string;

  @Prop({ type: String, required: true })
  species: string;

  @Prop({ type: String, required: true })
  name: string;
}

const AnimalSchema = SchemaFactory.createForClass(Animal);
type AnimalDocument = HydratedDocument<Animal>;

export { Animal, AnimalSchema, AnimalDocument };
