import { PostInput, postSchema, updatePostSchema } from './post.schema'
import slugify from 'slugify'
import { create, remove, getAll, update } from './blog.repository'
import { verifySession } from '../dal/session'
import { nanoid } from 'nanoid'
import { formatTagName, normalizeTag } from './utils/tag.helper'
import { PostDTO } from './types'
export async function createPost(input: PostInput) {
  const session = await verifySession()
  // validate data
  const parseData = postSchema.safeParse(input)
  if (!parseData.success) {
    throw new Error('Invalid post data')
  }
  const { tags, ...post } = parseData.data
  const slug = `${slugify(post.title, { lower: true, strict: true, trim: true })}-${nanoid(5)}`
  const parseTag = normalizeTag(tags)
  try {
    //create post
    const newPost = await create({
      ...post,
      slug,
      authorId: session.userId,
      tags: parseTag,
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
    const { ...post } = parseData.data
    const parseTag = normalizeTag(post.tags ?? [])
    const updatedPost = await update(postId, { ...post, tags: parseTag })
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
}): Promise<PostDTO[]> {
  const posts = await getAll(params)
  if (!posts) throw new Error('Something was wrong')
  const mappedData = posts.map((post) => {
    return {
      ...post,
      tags: post.tags.map((tag) => ({
        ...tag,
        displayName: formatTagName(tag.name),
      })),
    }
  })
  return mappedData
}
