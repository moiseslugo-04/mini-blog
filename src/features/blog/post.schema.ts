import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1).max(150),
  content: z.string().min(1, 'Content cannot be empty'),
  imageUrl: z.url('Must be a valid URL'),
  tags: z
    .array(z.string().min(1, 'Tag cannot be empty'))
    .min(1, 'At least one tag is required'),
  newTags: z.array(z.string().min(1, 'New tag cannot be empty')).optional(),
  published: z.boolean(),
  readTime: z.number().min(1).max(60),
})

export type PostSchema = z.infer<typeof postSchema>
export type PostInput = z.infer<typeof postSchema>
export type PostInputUpdate = Partial<PostInput>

export const updatePostSchema = postSchema.partial()

export type UpdatePostInput = z.infer<typeof updatePostSchema>
