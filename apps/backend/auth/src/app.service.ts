import { Injectable } from '@nestjs/common';
import prisma from '@app/database';

@Injectable()
export class AppService {
  constructor() {}

  async getPing() {
    return 'pong!';
  }
}
