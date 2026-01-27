'use server'
import { postSchema, PostInput } from './post.schema'
import { createPost, deletePost, updatePost } from './blog.service'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
export async function createPostAction(data: PostInput) {
  //validate data
  const parsedData = postSchema.safeParse(data)

  if (!parsedData.success)
    return { success: false, error: 'INVALID_DATA', data: null }

  //
  const response = await createPost(parsedData.data)
  if (!response.success) {
    return {
      success: false,
      data: null,
      error: 'Error trying create a new post',
    }
  }
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
  redirect('/admin/posts')
}

export async function updatePostAction(postId: string, data: PostInput) {
  const parsedData = postSchema.safeParse(data)
  if (!parsedData.success)
    return { success: false, error: 'INVALID_DATA', data: null }

  const response = await updatePost(postId, data)
  console.log(response)

  if (!response.success) {
    return {
      success: false,
      data: null,
      error: 'Error trying update post',
    }
  }
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
  redirect('/admin/posts')
}

export async function deletePostAction(postId: string) {
  const response = await deletePost(postId)

  if (!response.success) {
    return {
      success: false,
      data: null,
      error: 'Error trying delete post ',
    }
  }
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
  redirect('/admin/posts')
}
