'use client'
import { Card, CardHeader, CardTitle } from '@components/shadcn/card'
import { PostForm } from '@/ui/components/forms/PostForm'
import { Button } from '@/ui/components/shadcn/button'
import { usePostForm } from '@/lib/hooks/usePostForm'
import { PostResponse } from '@/lib/schemas/posts'
import { Spinner } from '../shadcn/spinner'

interface PostEditorProps {
  post?: PostResponse
}

export default function PostEditor({ post }: PostEditorProps) {
  const { form, loading, handleSubmit, handleCancel } = usePostForm({ post })
  return (
    <div className='max-w-5xl mx-auto mt-10 space-y-6 relative'>
      {loading ? (
        <div className='flex gap-1'>
          <Spinner />
          <p>Updating Post Please Wait</p>
        </div>
      ) : (
        <Card className='p-6 bg-zinc-950 text-zinc-100 border border-zinc-800 relative'>
          {/* Cancel Button */}
          <Button
            type='button'
            onClick={handleCancel}
            className='absolute top-4 right-4 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md'
          >
            Cancel
          </Button>

          <CardHeader>
            <CardTitle className='text-xl'>
              {post?.id ? '📝 Update Post' : '📝 Create new post'}
            </CardTitle>

            <PostForm
              form={form}
              OnSubmit={handleSubmit}
              loading={loading}
              action={post?.id ? 'Update Post' : 'Publish Post'}
            />
          </CardHeader>
        </Card>
      )}
    </div>
  )
}
