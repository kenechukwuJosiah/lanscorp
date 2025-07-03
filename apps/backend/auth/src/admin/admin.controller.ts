import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ListUsersQueryDto, CreateAdminDto } from '../dtos';
import { Request } from 'express';
import { AdminService } from './admin.service';
// import { AuthGuard } from '../auth/auth.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  listUsers(@Req() req: Request, @Query() query: ListUsersQueryDto) {
    const page = parseInt(query.page as unknown as string) || 1;
    const pageSize = parseInt(query.pageSize as unknown as string) || 10;
    return this.adminService.listAdmin(page, pageSize);
  }

  @Post()
  signup(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  // @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    const user = req.user as { id: string };
    return this.adminService.getProfile(user.id);
  }
}
