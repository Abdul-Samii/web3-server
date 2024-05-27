import { Document } from 'mongoose';

export interface CoreCategory extends Document {
  readonly name: string;
}
