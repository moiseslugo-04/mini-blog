'use server'
import prisma from '@lib/prisma'
import { PostWithAuthor } from './types'

export async function getPostWithAuthor(slug: string) {
  return await prisma.post.findFirst({
    where: { slug },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          avatarUrl: true,
        },
      },
    },
  })
}

export async function getAllPosts(
  searchTerm?: string
): Promise<PostWithAuthor[]> {
  const posts = await prisma.post.findMany({
    where: searchTerm
      ? {
          title: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        }
      : undefined,
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          avatarUrl: true,
        },
      },
    },
  })

  return posts as PostWithAuthor[]
}

export async function getPostById({ id }: { id: string }) {
  const post = await prisma.post.findUnique({ where: { id } })
  return post
}

export async function postCount() {
  return prisma.post.count()
}
