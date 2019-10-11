import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstname: String;
  readonly secondname: String;
  readonly firstSurname: String;
  readonly secondSurname: String;
  readonly age: Number;
  readonly email: String;
  password: String;
  readonly cui: number;
}
