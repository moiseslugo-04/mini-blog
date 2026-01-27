import prisma from '@/lib/prisma'

export async function getTagsList() {
  return prisma.tag.findMany({ where: { isPublic: true } })
}

export async function getTotalTags() {
  return prisma.tag.count()
}
