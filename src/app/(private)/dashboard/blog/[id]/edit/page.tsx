import { notFound } from 'next/navigation'
import { getPostById } from '@/lib/posts/queries'
import { PostResponse } from '@/lib/schemas/posts'
import { EditPost } from '@/ui/components/posts/EditPost'

export default async function BlogPostPage({
  params,
}: PageProps<'/dashboard/blog/[id]/edit'>) {
  const { id } = await params
  const post = (await getPostById({ id })) as PostResponse
  if (!post) {
    notFound()
  }
  return <EditPost post={post} />
}
