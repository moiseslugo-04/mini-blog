import prisma from '@lib/prisma'
export async function getUserById(id: string) {
  return prisma.user.findFirst({ where: { id } })
}
