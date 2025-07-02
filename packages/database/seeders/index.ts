import { PrismaClient, Role, FileType } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

function log(message: string) {
  console.log(`[SEEDER] ${message}`);
}

async function main() {
  log("Creating users...");
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      password: await bcrypt.hash("password123", 10),
      name: "User One",
    },
  });
  log(`Created user: ${user1.email}`);

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      password: await bcrypt.hash("password456", 10),
      name: "User Two",
    },
  });
  log(`Created user: ${user2.email}`);

  log("Creating admin...");
  const admin = await prisma.admin.create({
    data: {
      email: "admin@example.com",
      password: await bcrypt.hash("adminpass", 10),
      name: "Admin User",
      role: Role.ADMIN,
    },
  });
  log(`Created admin: ${admin.email}`);

  log("Creating billing transactions...");
  await prisma.billingTransaction.createMany({
    data: [
      {
        userId: user1.id,
        amount: 29.99,
        reference: "REF001",
      },
      {
        userId: user2.id,
        amount: 59.99,
        reference: "REF002",
      },
    ],
  });
  log("Billing transactions created.");

  log("Creating content posts...");
  const post1 = await prisma.contentPost.create({
    data: {
      title: "First Post",
      body: "This is the body of the first post",
      userId: user1.id,
    },
  });
  log(`Created post: ${post1.title}`);

  const post2 = await prisma.contentPost.create({
    data: {
      title: "Second Post",
      body: "This is the body of the second post",
      userId: user2.id,
    },
  });
  log(`Created post: ${post2.title}`);

  log("Creating files...");
  await prisma.file.createMany({
    data: [
      {
        filename: "image1.png",
        url: "https://example.com/image1.png",
        mimetype: "image/png",
        fileSize: 204800,
        type: FileType.IMAGE,
        uploadedBy: user1.id,
        contentPostId: post1.id,
      },
      {
        filename: "video1.mp4",
        url: "https://example.com/video1.mp4",
        mimetype: "video/mp4",
        fileSize: 10485760,
        type: FileType.VIDEO,
        uploadedBy: user2.id,
        contentPostId: post2.id,
      },
    ],
  });
  log("Files created.");

  log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error("[SEEDER] Error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
