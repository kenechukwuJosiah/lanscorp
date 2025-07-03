import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from '../dtos';
import { hash } from 'bcrypt';
import { prisma } from '@app/database';
import type { Admin } from '@prisma/client';

@Injectable()
export class AdminService {
  private readonly SALT_ROUNDS = 10;

  async create(createAdminDto: CreateAdminDto) {
    const { email, name } = createAdminDto;

    const existingAdmin: Admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      throw new ConflictException('Email already in use');
    }

    const password = 'temp1122';

    const hashedPassword = await hash(password, this.SALT_ROUNDS);

    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return {
      data: { id: admin.id, email: admin.email, name: admin.name },
      message: 'Admin created successfully',
    };
  }

  async getProfile(adminId: string) {
    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    if (!admin) {
      throw new NotFoundException('admin not found');
    }

    return { message: 'admin retrieved successfully', data: admin };
  }

  async listAdmin(page = 1, pageSize = 10) {
    const skip = (page - 1) * pageSize;
    const [admin, total] = await Promise.all([
      prisma.admin.findMany({
        skip,
        take: pageSize,
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.admin.count(),
    ]);
    return {
      message: 'admins retrieved successfully',
      data: admin,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }
}
