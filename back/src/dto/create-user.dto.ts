import {
  IsUUID,
  ValidateIf,
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsNumber,
  IsEmail,
  IsInt,
  Min,
  Max,
} from 'class-validator';

import { User } from '../interfaces/user.interface';

export class CreateUserDto implements User {
  @IsNotEmpty({ message: 'A firstname must be provided' })
  @IsString({ message: 'A valid firstname must be provided' })
  @MinLength(3, { message: 'The firstname must be at least 3 characters' })
  @MaxLength(30, { message: 'The firstname can be up to 30 characters' })
  readonly firstname: String;

  @IsNotEmpty({ message: 'A secondname must be provided' })
  @IsString({ message: 'A valid secondname must be provided' })
  @MinLength(3, { message: 'The secondname must be at least 3 characters' })
  @MaxLength(30, { message: 'The secondname can be up to 30 characters' })
  readonly secondname: String;

  @IsNotEmpty({ message: 'A firstSurname must be provided' })
  @IsString({ message: 'A valid firstSurname must be provided' })
  @MinLength(3, { message: 'The firstSurname must be at least 3 characters' })
  @MaxLength(30, { message: 'The firstSurname can be up to 30 characters' })
  readonly firstSurname: String;

  @IsNotEmpty({ message: 'A firstSurname must be provided' })
  @IsString({ message: 'A valid firstSurname must be provided' })
  @MinLength(3, { message: 'The firstSurname must be at least 3 characters' })
  @MaxLength(30, { message: 'The firstSurname can be up to 30 characters' })
  readonly secondSurname: String;

  @IsInt()
  @Min(5, { message: 'The person must be at least 5 years old' })
  @Max(120, { message: 'The person can be up to 120 years old' })
  readonly age: Number;

  @IsNotEmpty({ message: 'An email must be provided' })
  @IsEmail(undefined, { message: 'A valid email must be entered' })
  readonly email: String;

  @IsNotEmpty({ message: 'A username must be provided' })
  @IsString({ message: 'A valid username must be provided' })
  @MinLength(3, { message: 'The username must be at least 3 characters' })
  @MaxLength(30, { message: 'The username can be up to 30 characters' })
  readonly username: String;

  @IsNotEmpty({ message: 'A password must be provided' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: String;

  @IsNotEmpty({ message: 'A cui must be provided' })
  @IsInt()
  @Min(1000000000000, { message: 'A valid cui must be provided' })
  @Max(9999999999999, { message: 'A valid cui must be provided' })
  readonly cui: number;
}
