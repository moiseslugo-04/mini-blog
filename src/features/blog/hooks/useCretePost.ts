// hooks/posts/useCreatePost.ts
import { useActionState } from 'react'
import { useRouter } from 'next/navigation'
import { createPostAction } from '@/features/blog/server.actions'
import { PostSchema } from '@/features/blog/post.schema'
import { usePostForm } from './usePostForm'

const initialState = {
  success: false,
  data: null,
  error: null,
}

export function useCreatePost() {
  const router = useRouter()
  const { form, onSubmit } = usePostForm()
  const handleSubmit = form.handleSubmit((data: PostSchema) => {
    console.log('Submitting create post with data:', data)
  })
  const handleCancel = () => router.push('/dashboard')

  return {
    form,
    loading: form.formState.isSubmitting,
    handleSubmit,
    handleCancel,
    state: {},
  }
}
