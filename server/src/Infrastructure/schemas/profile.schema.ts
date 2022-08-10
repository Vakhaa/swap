import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfilDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop()
  name: string;

  @Prop()
  age: number;

}

export const ProfilSchema = SchemaFactory.createForClass(Profile);