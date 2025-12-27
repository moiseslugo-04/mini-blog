import 'server-only'

import prisma from '@lib/prisma'
import { createPostInput, PostDTO } from '../types'
import { postWithAuthorSelect } from './post.queries'
import { PostSchema, UpdatePostInput } from '../client/schema/posts'
export async function getPostWithAuthor(slug: string): Promise<PostDTO | null> {
  return await prisma.post.findFirst({
    where: { slug },
    select: postWithAuthorSelect,
  })
}
export async function getAllPosts(searchTerm?: string): Promise<PostDTO[]> {
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
  const post = await prisma.post.findUnique({
    where: { id },
    select: postWithAuthorSelect,
  })
  return post
}

export async function createPost(post: createPostInput, authorId: string) {
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
  return prisma.post.delete({ where: { id } })
}
export async function updatePost(data: UpdatePostInput, id: string) {
  return prisma.post.update({
    where: { id },
    data,
    select: postWithAuthorSelect,
  })
}

export async function postCount() {
  return prisma.post.count()
}
