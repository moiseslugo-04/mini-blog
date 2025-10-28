import prisma from '@lib/prisma'
export function getUserById(id: string) {
  return prisma.user.findFirst({ where: { id } })
}
