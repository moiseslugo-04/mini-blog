import { notFound } from 'next/navigation'
import { getPostById } from '@features/posts/server/posts.repository'
import { EditPost } from '@/ui/components/posts/EditPost'

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = await getPostById({ id })
  if (!post) return notFound()
  return <EditPost post={post} />
}
