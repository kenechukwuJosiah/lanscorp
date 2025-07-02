import { PrismaClient, User, Admin } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma };
export type { User, Admin };
