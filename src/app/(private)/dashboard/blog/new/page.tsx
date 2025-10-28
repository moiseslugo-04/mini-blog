'use client'
import { Card, CardHeader, CardTitle } from '@/ui/components/shadcn/card'
import { Button } from '@/ui/components/shadcn/button'
import { Spinner } from '@/ui/components/shadcn/spinner'
import { PostForm } from '@/ui/components/forms/PostForm'
import { useCreatePost } from '@/lib/hooks/useCretePost'
export default function CreatePostPage() {
  const { form, handleSubmit, handleCancel, loading } = useCreatePost()
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
            <Button
              type='button'
              onClick={handleCancel}
              className='absolute top-4 right-4 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md'
            >
              Cancel
            </Button>
            <CardHeader>
              <CardTitle className='text-xl'>📝 Create new post</CardTitle>
              <PostForm
                form={form}
                OnSubmit={handleSubmit}
                loading={loading}
                action={'Publish Post'}
              />
            </CardHeader>
          </Card>
        )}
      </div>
    </>
  )
}
