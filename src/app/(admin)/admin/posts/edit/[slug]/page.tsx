import { notFound } from 'next/navigation'
import { Card, CardHeader, CardTitle } from '@/shared/ui/card'
import { PostForm } from '@/features/blog/components/PostForm'
import Link from 'next/link'
import { getTagsList } from '@features/tags/tags.repository'
import { getPostBySlug } from '@features/blog/blog.repository'
import { updatePostAction } from '@/features/blog/server.actions'
import { PostDTO } from '@/features/blog/types'
interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = (await getPostBySlug(slug)) as PostDTO
  const tags = await getTagsList()
  if (!post) return notFound()
  return (
    <div className='max-w-5xl mx-auto mt-10 space-y-6 relative'>
      <Card className='p-6 bg-zinc-950 text-zinc-100 border border-zinc-800 relative'>
        <Link
          href='/admin/posts'
          type='button'
          className='absolute top-4 right-4 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md'
        >
          Cancel
        </Link>
        <CardHeader>
          <CardTitle className='text-xl'>📝 Update Post</CardTitle>
          <PostForm
            mode='edit'
            post={post}
            action={updatePostAction}
            label='update Post'
            tags={tags}
          />
        </CardHeader>
      </Card>
    </div>
  )
}
