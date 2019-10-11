import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  _id: String,
  firstname: String,
  secondname: String,
  firstSurname: String,
  secondSurname: String,
  age: Number,
  email: String,
  password: String,
  cui: Number,
});
