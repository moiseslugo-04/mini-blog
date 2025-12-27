export type PostDTO = {
  id: string
  title: string
  slug: string
  content: string
  imageUrl: string
  category: string
  published: boolean
  readTime: number
  authorId: string
  createdAt: Date
  author: {
    id: string
    name: string
    email: string
    avatarUrl: string | null
  }
}

export type createPostInput = {
  title: string
  slug: string
  content: string
  imageUrl: string
  category: string
  published: boolean
  readTime: number
}
