import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ListUsersQueryDto } from '../dtos';
import { Request } from 'express';
// import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  listUsers(@Req() req: Request, @Query() query: ListUsersQueryDto) {
    const page = parseInt(query.page as unknown as string) || 1;
    const pageSize = parseInt(query.pageSize as unknown as string) || 10;
    return this.userService.listUsers(page, pageSize);
  }

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
