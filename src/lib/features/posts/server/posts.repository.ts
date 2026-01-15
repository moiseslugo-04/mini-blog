import 'server-only'
import prisma from '@lib/prisma'
import { createPostInput, PostDTO } from '../types'
import { postWithAuthorSelect } from './post.queries'
import { UpdatePostInput } from '../client/schema/posts'
import { cacheLife, cacheTag, revalidatePath } from 'next/cache'
export async function getPostWithAuthor(slug: string): Promise<PostDTO | null> {
  'use cache'
  cacheLife('hours')
  cacheTag('posts')
  return await prisma.post.findFirst({
    where: { slug },
    select: postWithAuthorSelect,
  })
}
export async function getAllPosts(searchTerm?: string): Promise<PostDTO[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('posts')
  return prisma.post.findMany({
    where: searchTerm
      ? { title: { contains: searchTerm, mode: 'insensitive' } }
      : undefined,
    orderBy: { createdAt: 'desc' },
    select: postWithAuthorSelect,
  })
}

export async function getPostById({
  id,
}: {
  id: string
}): Promise<PostDTO | null> {
  'use cache'
  cacheLife('hours')
  cacheTag('posts')
  const post = await prisma.post.findUnique({
    where: { id },
    select: postWithAuthorSelect,
  })
  return post
}

export async function createPost(post: createPostInput, authorId: string) {
  revalidatePath('posts')
  return prisma.post.create({
    data: {
      ...post,
      author: { connect: { id: authorId } },
      published: true,
    },
    select: postWithAuthorSelect,
  })
}

export async function deletePost(id: string) {
  revalidatePath('posts')

  return prisma.post.delete({ where: { id } })
}
export async function updatePost(data: UpdatePostInput, id: string) {
  revalidatePath('posts')
  return prisma.post.update({
    where: { id },
    data,
    select: postWithAuthorSelect,
  })
}

export async function postCount() {
  return prisma.post.count()
}
