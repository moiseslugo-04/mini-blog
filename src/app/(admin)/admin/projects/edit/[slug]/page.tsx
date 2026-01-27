import { notFound } from 'next/navigation'
import { Card, CardHeader, CardTitle } from '@/shared/ui/card'
import { PostForm } from '@/features/blog/components/PostForm'
import Link from 'next/link'
import { getPostBySlug } from '@/features/blog/blog.repository'
import { updatePostAction } from '@/features/blog/server.actions'
interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()
  return (
    <div className='max-w-5xl mx-auto mt-10 space-y-6 relative'>
      <Card className='p-6 bg-zinc-950 text-zinc-100 border border-zinc-800 relative'>
        <Link
          href='/dashboard'
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
            label={'Update Post'}
            action={updatePostAction}
          />
        </CardHeader>
      </Card>
    </div>
  )
}
