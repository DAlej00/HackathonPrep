import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    let type = username.includes('@') ? 'email' : 'username';
    const user = await this.usersService.findOne(type, username, true);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else if (user) {
      return false;
    } else {
      return null;
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
