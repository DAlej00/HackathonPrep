import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Res, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (user == null) throw new HttpException({ code: 401 }, 200);
    else if (user == false) throw new HttpException({ code: 401.1 }, 200);
    return user;
  }
}
