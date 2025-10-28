import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content cannot be empty'),
  imageUrl: z.url('Must be a valid URL'),
  category: z.string().min(1, 'The category is mandatory'),
  published: z.coerce.boolean().default(true).optional(),
  readTime: z.coerce.number().min(1).max(60),
})

export type PostSchema = z.infer<typeof postSchema>
export interface PostResponse extends PostSchema {
  id: string
  authorId: string
  createdAt: Date
  updatedAt: Date
  slug: string
}
