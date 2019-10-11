import { Injectable, HttpException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { v4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

  async create(userDto: CreateUserDto): Promise<User> {
    if (await this.findOne('cui', userDto.cui, false))
      throw new HttpException(
        { message: `User's cui is alredy registered` },
        404,
      );
    else if (await this.findOne('email', userDto.email, false))
      throw new HttpException(
        { message: `User's email is alredy registered` },
        404,
      );
    else if (await this.findOne('username', userDto.username, false))
      throw new HttpException(
        { message: 'Username is alredy registered' },
        404,
      );

    const dbUser = new this.userModel(userDto);
    dbUser._id = v4();
    dbUser.password = await bcrypt.hash(userDto.password, 10);
    return await dbUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(field: string, value: any, object: boolean): Promise<any> {
    var find = await this.userModel.findOne({ [field]: value });
    return object ? find : find != null ? true : false;
  }
}
