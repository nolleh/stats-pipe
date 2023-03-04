import { Controller, Get, Header, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/stats')
  @Header('Content-type', 'image/svg+xml')
  async getStats(@Req() req: Request) {
    return await this.appService.getStats(req);
  }

  @Get('/stats/top-langs')
  @Header('Content-type', 'image/svg+xml')
  async getTopLangs(@Req() req: Request) {
    return await this.appService.getTopLangs(req);
  }

}
