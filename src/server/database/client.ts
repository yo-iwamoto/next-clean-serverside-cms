import { PrismaClient } from '@prisma/client';

export type DBClient = PrismaClient;

export const db = new PrismaClient({
  log: ['info', 'query', 'error', 'warn'],
});
