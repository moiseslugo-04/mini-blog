'use server'
import { revalidatePath } from 'next/cache'
import { postSchema } from '@/lib/features/posts/client/schema/posts'
import { PostDTO } from '../types'
import { createNewPost, deleteUserPost, updateUserPost } from './post.service'
export type CreatePostState = {
  success: boolean
  data: PostDTO | null
  error?: string | null
}

export async function createPostAction(
  _prevState: CreatePostState,
  formData: FormData
): Promise<CreatePostState> {
  const rawData = Object.fromEntries(formData.entries())
  const parsed = postSchema.parse(rawData)
  const post = await createNewPost(parsed)
  revalidatePath('/blog')
  revalidatePath('/dashboard')
  return post
}

interface DeletePostState {
  success: boolean
  error?: null | string
}
export async function deletePostAction(
  _prevState: DeletePostState,
  id: string
): Promise<DeletePostState> {
  try {
    await deleteUserPost(id)
    revalidatePath('/blog')
    revalidatePath('/dashboard')
    return { success: true, error: null }
  } catch (error) {
    console.log(error)
    throw new Error('Error deleting post')
  }
}

export type UpdatePostState = {
  success: boolean
  data: PostDTO | null
  error?: string | null
}

export async function updatePostAction(
  _prevState: UpdatePostState,
  formData: FormData
): Promise<UpdatePostState> {
  try {
    const updatedPost = await updateUserPost(formData)
    revalidatePath('/blog')
    revalidatePath('/dashboard')
    return { success: true, data: updatedPost }
  } catch (error) {
    console.log(error)
    throw new Error('Error updating post')
  }
}
