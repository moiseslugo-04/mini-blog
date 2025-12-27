export const postWithAuthorSelect = {
  id: true,
  title: true,
  slug: true,
  content: true,
  imageUrl: true,
  category: true,
  published: true,
  readTime: true,
  authorId: true,
  createdAt: true,
  author: {
    select: {
      id: true,
      name: true,
      email: true,
      avatarUrl: true,
    },
  },
}
