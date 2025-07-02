import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dtos';
import { Request } from 'express';
// import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.signup(createUserDto);
  }

  // @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Req() req: Request) {
    const user = req.user as { id: string };
    return this.userService.getProfile(user.id);
  }
}
