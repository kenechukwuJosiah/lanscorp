import { Injectable } from '@nestjs/common';
import { prisma, PrismaClient } from '@app/database';
@Injectable()
export class AppService {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }
  getPing(): string {
    this.prisma.$connect();
    return 'pong!';
  }
}
