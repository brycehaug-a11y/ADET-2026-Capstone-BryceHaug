import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import homePage from './homepage';

@Controller()
export class AppController {
  @Get()
  home(@Res() res: any) {
    return res.send(homePage);
  }
}
