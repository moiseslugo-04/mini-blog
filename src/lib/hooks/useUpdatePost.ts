// hooks/posts/useCreatePost.ts
import { useActionState, startTransition, useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { updatePost, UpdatePostState } from '@lib/posts/actions/update'
import { useForm } from '@lib/hooks/useForm'
import { PostResponse, PostSchema, postSchema } from '@lib/schemas/posts'

const initialState: UpdatePostState = {
  success: false,
  data: null,
  error: null,
}

export function useUpdatePost({ post }: { post: PostResponse }) {
  const [state, formAction, loading] = useActionState(updatePost, initialState)
  const router = useRouter()
  const form = useForm<PostSchema>({
    schema: postSchema,
    defaultValues: {
      title: post.title,
      content: post.content,
      category: post.category,
      readTime: post.readTime,
      imageUrl: post.imageUrl,
    },
  })
  useEffect(() => {
    if (state.success && state.data) {
      redirect('/dashboard')
    }
  }, [state.success, state.data, router])
  const handleSubmit = (data: PostSchema) => {
    const formData = new FormData()
    formData.append('id', post.id)
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value.toString())
      }
    })
    startTransition(() => formAction(formData))
  }
  const handleCancel = () => router.push('/dashboard')

  return {
    form,
    loading,
    handleSubmit,
    handleCancel,
    state,
  }
}
