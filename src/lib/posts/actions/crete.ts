// lib/posts/actions/create.ts
'use server'

import prisma from '@lib/prisma'
import { revalidatePath } from 'next/cache'
import { PostResponse, postSchema } from '@/lib/schemas/posts'
import { withAuth } from '@/lib/auth/with-auth'
export type CreatePostState = {
  success: boolean
  data: PostResponse | null
  error: string | null
}

export async function createPost(
  prevState: CreatePostState,
  formData: FormData
): Promise<CreatePostState> {
  return withAuth<PostResponse>(async (user) => {
    const rawData = Object.fromEntries(formData.entries())

    const parsed = postSchema.safeParse(rawData)

    if (!parsed.success) {
      throw new Error(parsed.error.issues[0]?.message ?? 'Invalid data')
    }
    const { title, content, imageUrl, category, readTime } = parsed.data
    const slugParse =
      title.toLowerCase().replace(/\s+/g, '-') + Date.now().toString()

    const post = await prisma.post.create({
      data: {
        title,
        slug: slugParse,
        content,
        imageUrl,
        category,
        readTime,
        author: { connect: { id: user.id } },
        published: true,
      },
    })
    revalidatePath('/blog')
    revalidatePath('/dashboard')
    return post
  })
}
