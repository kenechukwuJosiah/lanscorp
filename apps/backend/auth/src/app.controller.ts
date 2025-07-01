import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AppService) {}

  @Get('ping')
  getPing() {
    return this.authService.getPing();
  }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string; role: 'user' | 'admin' },
  ) {
    const user = await this.authService.validateUser(
      body.email,
      body.password,
      body.role,
    );
    return this.authService.login(user);
  }
}
