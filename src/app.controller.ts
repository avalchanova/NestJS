import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // this is a decorator (when there is a @ - decorator)
  getHello(): string {
    return this.appService.getHello();
  }
}
