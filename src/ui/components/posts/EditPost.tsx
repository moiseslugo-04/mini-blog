'use client'
import { Card, CardHeader, CardTitle } from '@/ui/components/shadcn/card'
import { Button } from '@/ui/components/shadcn/button'
import { Spinner } from '@/ui/components/shadcn/spinner'
import { PostForm } from '@/ui/components/forms/PostForm'
import { useUpdatePost } from '@lib/hooks/useUpdatePost'
import { PostDTO } from '@/lib/features/posts/types'
interface EditPostProps {
  post: PostDTO
}
export function EditPost({ post }: EditPostProps) {
  const { form, handleSubmit, handleCancel, loading } = useUpdatePost({ post })
  if (!post) {
    return (
      <div className='p-4 bg-red-100 border border-red-400 text-red-700'>
        <h2>Error: Post data not available</h2>
        <p>Please check the server logs for more information.</p>
      </div>
    )
  }
  return (
    <div className='max-w-5xl mx-auto mt-10 space-y-6 relative'>
      {loading ? (
        <div className='flex gap-1'>
          <Spinner />
          <p>Updating Post Please Wait</p>
        </div>
      ) : (
        <Card className='p-6 bg-zinc-950 text-zinc-100 border border-zinc-800 relative'>
          <Button
            type='button'
            onClick={handleCancel}
            className='absolute top-4 right-4 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md'
          >
            Cancel
          </Button>
          <CardHeader>
            <CardTitle className='text-xl'>📝 Update Post</CardTitle>
            <PostForm
              form={form}
              OnSubmit={handleSubmit}
              loading={loading}
              action={'Update Post'}
            />
          </CardHeader>
        </Card>
      )}
    </div>
  )
}
