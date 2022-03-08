import { Prisma, PrismaClient } from '@prisma/client'

function getPrismaInstance() {
  const prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  > = global.prisma || new PrismaClient()
  if (process.env.NODE_ENV !== 'production') global.prisma = prisma
  return prisma
}

export const prisma = getPrismaInstance()
