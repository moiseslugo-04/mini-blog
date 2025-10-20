import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPost, updatePost } from '@lib/posts/actions'
import { useForm } from '@lib/hooks/useForm'
import { PostSchema, postSchema, PostResponse } from '@lib/schemas/posts'
interface UsePostFormProps {
  post?: PostResponse
}
export function usePostForm({ post }: UsePostFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const form = useForm<PostSchema>({
    schema: postSchema,
    defaultValues: {
      ...(post || {
        title: '',
        slug: '',
        content: '',
        category: '',
        readTime: 1,
        published: true,
        imageUrl: undefined,
      }),
    },
  })
  const handleSubmit = async (data: PostSchema) => {
    setLoading(true)
    try {
      if (post) {
        const { id, ...updates } = post
        await updatePost({ id, updates })
        router.push('/blog')
      } else {
        await createPost(data)
        form.reset()
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Error submitting post:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => router.push('/dashboard')
  return {
    form,
    loading,
    handleSubmit,
    handleCancel,
  }
}
