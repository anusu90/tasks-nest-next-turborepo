import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class User {
  @Prop({ isRequired: true })
  name: string;

  @Prop()
  email: string;
}

const UserSchema = SchemaFactory.createForClass(User);
type UserDocument = HydratedDocument<User>;

export { User, UserSchema, UserDocument };
