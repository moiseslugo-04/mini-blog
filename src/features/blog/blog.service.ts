import { PostInput, postSchema, updatePostSchema } from './post.schema'
import slugify from 'slugify'
import { create, remove, getAll, update } from './blog.repository'
import { verifySession } from '../dal/session'
import { nanoid } from 'nanoid'
export async function createPost(input: PostInput) {
  const session = await verifySession()
  // validate data
  const parseData = postSchema.safeParse(input)
  if (!parseData.success) {
    throw new Error('Invalid post data')
  }
  const { tags, newTags = [], ...post } = parseData.data
  const slug = `${slugify(post.title, { lower: true, strict: true, trim: true })}-${nanoid(5)}`
  try {
    //create post
    const newPost = await create({
      ...post,
      slug,
      authorId: session.userId,
      tags: tags,
    })

    return { success: true, error: null, data: newPost }
  } catch (error) {
    console.log(error)
    return { success: false, error, data: null }
  }
}

export async function updatePost(postId: string, data: PostInput) {
  await verifySession()
  //validate data
  const parseData = updatePostSchema.safeParse(data)
  if (!parseData.success) {
    throw new Error('Invalid post data')
  }
  try {
    const updatedPost = await update(postId, parseData.data)
    return { success: true, error: null, data: updatedPost }
  } catch (error) {
    return { success: false, error, data: null }
  }
}

export async function deletePost(postId: string) {
  try {
    await verifySession()
    const deletedPost = await remove(postId)
    return { success: false, error: null, data: deletedPost }
  } catch (error) {
    return { success: false, error, data: null }
  }
}

export async function getPostList(params?: {
  tags?: string[]
  search?: string
}) {
  return getAll(params)
}
