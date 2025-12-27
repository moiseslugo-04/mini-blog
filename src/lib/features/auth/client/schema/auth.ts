import { z } from 'zod'

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(3, 'The Field cannot be empty or contain less than 3 characters')
    .refine(
      (value) =>
        /^[a-zA-Z0-9_]+$/.test(value) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message: 'Must be a valid email or username',
      }
    ),
  password: z
    .string()
    .min(6, 'The password must be at least 6 characters long'),
})
export type LoginSchema = z.infer<typeof loginSchema>
