import { date, z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(1, 'El título es obligatorio'),
  slug: z.string().min(1, 'El slug es obligatorio'),
  content: z.string().min(1, 'El contenido no puede estar vacío'),
  imageUrl: z.string().url('Debe ser una URL válida'),
  category: z.string().min(1, 'La categoría es obligatoria'),
  date: z.string().optional(),
  published: z.boolean().default(true).optional(),
  readTime: z.number().min(1, 'Debe ser al menos 1 minuto'),
})
export type PostSchema = z.infer<typeof postSchema>
export interface PostResponse extends PostSchema {
  id: string
  createdAt: string
  updatedAt: string
}
