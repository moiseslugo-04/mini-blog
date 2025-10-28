// hooks/posts/useCreatePost.ts
import { useActionState, startTransition, useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { createPost, CreatePostState } from '@lib/posts/actions/crete'
import { useForm } from '@lib/hooks/useForm'
import { PostSchema, postSchema } from '@lib/schemas/posts'

const initialState: CreatePostState = {
  success: false,
  data: null,
  error: null,
}

export function useCreatePost() {
  const [state, formAction, loading] = useActionState(createPost, initialState)
  const router = useRouter()
  const form = useForm<PostSchema>({
    schema: postSchema,
    defaultValues: {
      title: '',
      content: '',
      category: '',
      readTime: 1,
      imageUrl: '',
    },
  })
  useEffect(() => {
    if (state.success && state.data) {
      redirect('/dashboard')
    }
  }, [state.success, state.data, router])
  const handleSubmit = (data: PostSchema) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString())
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
