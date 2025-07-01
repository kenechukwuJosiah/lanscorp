import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import prisma from '@app/database';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}

  async getPing() {
    return 'pong!';
  }

  async validateUser(email: string, password: string, role: 'user' | 'admin') {
    let user;
    switch (role) {
      case 'user':
        user = await prisma.user.findUnique({ where: { email } });
        break;

      case 'admin':
        user = await prisma.admin.findUnique({ where: { email } });
        break;
      default:
        break;
    }

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { id: user.id, email: user.email, role };
  }

  async login(payload: { id: number; email: string; role: string }) {
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
