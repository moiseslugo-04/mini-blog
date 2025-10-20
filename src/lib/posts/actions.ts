'use server'
import prisma from '@lib/prisma'
import { revalidatePath } from 'next/cache'
import { PostSchema, postSchema } from '@lib/schemas/posts'
import { auth } from '@lib/auth/auth'

async function createPost(formData: PostSchema) {
  const session = await auth()
  if (!session?.user) throw new Error('Unauthorized')

  const parsed = postSchema.safeParse(formData)
  if (!parsed.success)
    throw new Error(parsed.error.issues[0]?.message ?? 'Invalid data')

  const { title, content, imageUrl, category, readTime, slug } = parsed.data

  const slugParse =
    slug.toLowerCase().replace(/\s+/g, '-') + Date.now().toString()

  const post = await prisma.post.create({
    data: {
      title,
      slug: slugParse,
      content,
      imageUrl,
      category,
      readTime,
      author: { connect: { id: session.user.id } },
      published: true,
    },
  })
  revalidatePath('/blog')
  return post
}
async function updatePost({ id, updates }: UpdatePost) {
  const parsed = postSchema.partial().safeParse(updates)
  if (!parsed.success)
    throw new Error(parsed.error.issues[0]?.message ?? 'Invalid data')
  const post = await prisma.post.findUnique({ where: { id } })
  if (!post) throw new Error('Post not found')
  await prisma.post.update({
    where: { id },
    data: { ...updates },
  })
  revalidatePath('/blog')
  revalidatePath('/dashboard')
}
async function deletePost(id: string) {
  await prisma.post.delete({ where: { id } })
  revalidatePath('/blog')
  revalidatePath('/dashboard')
}
async function getPosts(searchTerm?: string) {
  if (searchTerm) {
    return filterPostsByTitle(searchTerm)
  }
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return posts
}
async function getPostById({ id }: { id: string }) {
  const post = await prisma.post.findUnique({ where: { id } })
  return post
}

async function getPostBySlug(slug: string) {
  return prisma.post.findFirst({ where: { slug } })
}
interface UpdatePost {
  id: string
  updates: Partial<PostSchema>
}

async function filterPostsByTitle(term: string) {
  const post = await prisma.post.findMany({
    where: {
      title: {
        contains: term,
        mode: 'insensitive',
      },
    },
    orderBy: { createdAt: 'desc' },
  })
  return post
}
export {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  getPostBySlug,
  deletePost,
}
