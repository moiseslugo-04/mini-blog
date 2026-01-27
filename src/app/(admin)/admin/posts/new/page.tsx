import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { PostForm } from '@/features/blog/components/PostForm'
import Link from 'next/link'
import { createPostAction } from '@/features/blog/server.actions'
import { getTagsList } from '@/features/tags/tags.repository'

export default async function CreatePostPage() {
  const tags = await getTagsList()
  return (
    <>
      <div className='max-w-5xl mx-auto mt-10 space-y-6 relative'>
        <Card className='p-6 bg-zinc-950 text-zinc-100 border border-zinc-800 relative'>
          {/* Cancel Button */}
          <Link
            type='button'
            href={'/admin/posts'}
            className='absolute top-4 right-4 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md'
          >
            Cancel
          </Link>
          <CardHeader>
            <CardTitle className='text-xl'>📝 Create new post</CardTitle>
          </CardHeader>
          <CardContent>
            <PostForm
              mode='create'
              label='create Post'
              action={createPostAction}
              tags={tags}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
