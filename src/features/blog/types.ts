import { User } from '@prisma/client'
import { TagDTO } from '@features/tags/types'

export type PostDTO = {
  id: string
  title: string
  description: string
  slug: string
  content: string
  imageUrl: string
  tags: TagDTO[]
  published: boolean
  readTime: number
  authorId: string
  createdAt: Date
  author: User
}

export type PostInput = {
  title: string
  description: string
  slug: string
  content: string
  authorId: string
  imageUrl: string
  tags: string[]

  published: boolean
  readTime: number
}

//export type PostInputUpdate = Partial<PostInput>
