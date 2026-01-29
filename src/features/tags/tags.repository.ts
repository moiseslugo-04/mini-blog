import prisma from '@/lib/prisma'
import { TagDTO } from './types'
import { formatTagName } from '../blog/utils/tag.helper'

export async function getTagsList(): Promise<TagDTO[]> {
  const data = await prisma.tag.findMany({ where: { isPublic: true } })
  return data.map((tag) => ({ ...tag, displayName: formatTagName(tag.name) }))
}

export async function getTotalTags() {
  return prisma.tag.count()
}
