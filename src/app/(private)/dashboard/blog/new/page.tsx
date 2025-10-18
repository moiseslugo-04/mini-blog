'use client'
import { PostForm } from '@/ui/components/forms/PostForm'
import { Card, CardHeader, CardTitle } from '@components/shadcn/card'
import { useState } from 'react'
import { postSchema, PostSchema } from '@/lib/schemas/posts'
import { SubmitHandler } from 'react-hook-form'
import { useForm } from '@lib/hooks/useForm'
import { createPost } from '@/lib/posts/actions'
export default function PostEditor() {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    schema: postSchema,
    defaultValues: {
      title: '',
      slug: '',
      content: '',
      category: '',
      readTime: 1,
      published: true,
      imageUrl: undefined,
    },
  })
  const onSubmit: SubmitHandler<PostSchema> = async (values: PostSchema) => {
    setLoading(true)
    try {
      await createPost(values)
      form.reset()
    } catch (error) {
      console.error('Error creating post:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='max-w-5xl mx-auto mt-10 space-y-6'>
      <Card className='p-6 bg-zinc-950 text-zinc-100 border border-zinc-800'>
        <CardHeader>
          <CardTitle className='text-xl'>📝 Create new post</CardTitle>
          <PostForm
            form={form}
            OnSubmit={onSubmit}
            loading={loading}
            action='Publish Post'
          />
        </CardHeader>
      </Card>
    </div>
  )
}
