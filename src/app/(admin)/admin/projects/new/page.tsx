'use client'
import { Card, CardHeader, CardTitle } from '@/shared/ui/card'
import { Spinner } from '@/shared/ui/spinner'
import { PostForm } from '@/features/blog/components/PostForm'
import { useCreatePost } from '@/features/blog/hooks/useCretePost'
import Link from 'next/link'
export default function CreatePostPage() {
  const { loading } = useCreatePost()
  return (
    <>
      <div className='max-w-5xl mx-auto mt-10 space-y-6 relative'>
        {loading ? (
          <div className='flex gap-1'>
            <Spinner />
            <p>Creating Post Please Wait</p>
          </div>
        ) : (
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
              <CardTitle className='text-xl'>📝 Create new Project</CardTitle>
              <PostForm
                label={'Publish Post'}
                action={() => {}}
                mode='create'
              />
            </CardHeader>
          </Card>
        )}
      </div>
    </>
  )
}
