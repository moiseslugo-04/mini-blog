import { getPostById } from '@/lib/posts/actions'
import { PostResponse } from '@/lib/schemas/posts'
import PostEditor from '@/ui/components/forms/PostEditor'
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = (await getPostById({ id })) as PostResponse
  return <PostEditor post={post} />
}
