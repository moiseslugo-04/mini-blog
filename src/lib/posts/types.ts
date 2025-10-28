import { PostResponse } from '../schemas/posts'
export type PostWithAuthor = PostResponse & {
  author: {
    id: string
    name: string
    email: string
    avatarUrl: string | null
  }
}
