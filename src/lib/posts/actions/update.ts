// lib/posts/actions/update.ts
'use server'
import prisma from '@lib/prisma'
import { revalidatePath } from 'next/cache'
import { PostResponse, postSchema } from '@/lib/schemas/posts'
import { withAuth } from '@/lib/auth/with-auth'

export type UpdatePostState = {
  success: boolean
  data: PostResponse | null
  error: string | null
}

export async function updatePost(
  prevState: UpdatePostState,
  formData: FormData
): Promise<UpdatePostState> {
  return withAuth<PostResponse>(async () => {
    const id = formData.get('id') as string
    const rawData = Object.fromEntries(formData.entries())
    const { id: _, ...dataToValidate } = rawData
    const parsed = postSchema.safeParse(dataToValidate)

    if (!parsed.success) {
      throw new Error(parsed.error.issues[0]?.message ?? 'Invalid data')
    }

    const { title, content, imageUrl, category, readTime } = parsed.data
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        imageUrl,
        category,
        readTime,
      },
    })
    revalidatePath('/blog')
    revalidatePath('/dashboard')
    return post
  })
}
