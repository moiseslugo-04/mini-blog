'use client'

import { SubmitHandler } from 'react-hook-form'
import { useForm } from '@lib/hooks/useForm'
import { useEffect, useState } from 'react'

import { getPostById, updatePost } from '@lib/posts/actions'
import { Card, CardHeader, CardTitle } from '@components/shadcn/card'

import { notFound, useParams } from 'next/navigation'
import { postSchema, PostSchema } from '@/lib/schemas/posts'
import { PostForm } from '@/ui/components/forms/PostForm'
import { useRouter } from 'next/navigation'
export default function PostPage() {
  const [fetching, setFetching] = useState(true)
  const [updating, setUpdating] = useState(false)
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

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
  useEffect(() => {
    async function fetchPost() {
      try {
        setFetching(true)
        const fetchedPost = await getPostById({ id })
        if (!fetchedPost) return notFound()
        form.reset(fetchedPost as PostSchema)
      } catch (e) {
        console.error(e)
      } finally {
        setFetching(false)
      }
    }
    fetchPost()
  }, [id, form])

  if (fetching) {
    return <p className='text-center mt-10'>Loading post...</p>
  }
  const handleSubmit: SubmitHandler<PostSchema> = async (data) => {
    setUpdating(true)
    try {
      await updatePost({ id, updates: data })
      router.push('/blog')
    } catch (error) {
      console.log(error)
    } finally {
      setUpdating(false)
    }
  }
  return (
    <div className='max-w-5xl mx-auto mt-10 space-y-6'>
      <Card className='p-6 bg-zinc-950 text-zinc-100 border border-zinc-800'>
        <CardHeader>
          <CardTitle className='text-xl'>📝 Update Posts</CardTitle>
          {updating ? (
            <p>Updating Post....</p>
          ) : (
            <PostForm
              form={form}
              loading={updating}
              OnSubmit={handleSubmit}
              action='Update Post'
            />
          )}
        </CardHeader>
      </Card>
    </div>
  )
}
