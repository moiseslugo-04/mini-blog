import 'server-only'

import prisma from '@lib/prisma'
import slugify from 'slugify'
import { nanoid } from 'nanoid'
import { PostInput } from './types'
export async function create(data: PostInput) {
  const { tags, ...post } = data
  return prisma.post.create({
    data: {
      ...post,
      tags: {
        connectOrCreate: tags.map((name) => ({
          where: { name },
          create: {
            name,
            slug: slugify(name, { lower: true }) + '-' + nanoid(5),
          },
        })),
      },
    },
  })
}

export async function update(postId: string, data: Partial<PostInput>) {
  const { tags = [], ...post } = data
  return prisma.post.update({
    where: { id: postId },
    data: {
      ...post,
      tags: {
        set: [],
        connectOrCreate: tags.map((name) => ({
          where: { name },
          create: {
            name,
            slug: slugify(name, { lower: true }) + '-' + nanoid(5),
          },
        })),
      },
    },
  })
}

export async function remove(postId: string) {
  return prisma.post.delete({ where: { id: postId } })
}

export async function getById(postId: string) {
  return prisma.post.findUnique({
    where: { id: postId },
    include: { tags: true, author: true },
  })
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
    include: { tags: true, author: true },
  })
}

export async function getAll(searchParams?: {
  tags?: string[]
  search?: string
}) {
  const tagSlug = searchParams?.tags || []
  const search = searchParams?.search
  return prisma.post.findMany({
    where: {
      AND: [
        search
          ? {
              OR: [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
              ],
            }
          : {},
        tagSlug?.length > 0
          ? {
              tags: {
                some: {
                  slug: { in: tagSlug },
                },
              },
            }
          : {},
      ],
    },
    include: {
      tags: true,
      author: true,
    },
    orderBy: { createdAt: 'desc' },
  })
}

export async function getTotalCountPost() {
  return prisma.post.count()
}
