import { verifySession } from '../../dal/session'
import { PostSchema, updatePostSchema } from '../client/schema/posts'

import slugify from 'slugify'
import { nanoid } from 'nanoid'
import { createPost, deletePost, updatePost } from './posts.repository'
export async function createNewPost(input: PostSchema) {
  const session = await verifySession()
  //create Slug
  const baseSlug = slugify(input.title, {
    lower: true,
    strict: true,
    trim: true,
  })
  const slug = `${baseSlug}-${nanoid(6)}`
  const newPost = { ...input, slug }
  const data = await createPost(newPost, session.userId)
  return { success: true, data }
}

export async function deleteUserPost(postId: string) {
  await verifySession()
  await deletePost(postId)
  return { success: true }
}

export async function updateUserPost(formData: FormData) {
  await verifySession()
  const id = formData.get('id') as string
  const rawData = Object.fromEntries(formData.entries())
  const { id: _, ...dataToValidate } = rawData
  const data = updatePostSchema.parse(dataToValidate)
  const updatedPost = await updatePost(data, id)
  return updatedPost
}
