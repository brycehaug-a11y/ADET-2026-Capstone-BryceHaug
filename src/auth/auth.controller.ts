import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: any) {
    return res.redirect('/auth/login');
  }
}
export class AuthController {}