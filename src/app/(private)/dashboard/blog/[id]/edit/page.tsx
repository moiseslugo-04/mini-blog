import { notFound } from 'next/navigation'
import { getPostById } from '@features/posts/server/posts.repository'
import { Card, CardHeader, CardTitle } from '@/ui/components/shadcn/card'
import { PostForm } from '@/ui/components/forms/PostForm'
import Link from 'next/link'
interface BlogPostPageProps {
  params: Promise<{ id: string }>
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = await getPostById({ id })
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
          <PostForm post={post} action={'Update Post'} />
        </CardHeader>
      </Card>
    </div>
  )
}
