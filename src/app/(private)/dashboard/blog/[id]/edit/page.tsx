import { getPostById } from '@/lib/posts/actions'
import { PostWithId } from '@/lib/schemas/posts'
import PostEditor from '@/ui/components/forms/PostEditor'
export default async function PostPage({ params }: { params: Promise<any> }) {
  const { id } = await params
  const post = (await getPostById({ id })) as PostWithId
  return <PostEditor post={post} />
}
