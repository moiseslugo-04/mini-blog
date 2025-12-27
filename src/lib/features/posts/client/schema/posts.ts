import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content cannot be empty'),
  imageUrl: z.url('Must be a valid URL'),
  category: z.string().min(1, 'The category is mandatory'),
  published: z.coerce.boolean().default(true),
  readTime: z.coerce.number().min(1).max(60),
})

export type PostSchema = z.infer<typeof postSchema>

export const updatePostSchema = z.object({
  title: z.string().min(3).optional(),
  content: z.string().min(10).optional(),
  imageUrl: z.url().optional(),
  category: z.string().optional(),
  published: z.boolean().optional(),
  readTime: z.number().int().positive().optional(),
})

export type UpdatePostInput = z.infer<typeof updatePostSchema>
