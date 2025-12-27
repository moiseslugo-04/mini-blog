// hooks/posts/useCreatePost.ts
import { useActionState, startTransition, useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'
import {
  updatePostAction,
  UpdatePostState,
} from '@features/posts/server/post.actions'
import { useForm } from '@lib/hooks/useForm'
import {
  PostSchema,
  postSchema,
} from '@/lib/features/posts/client/schema/posts'

const initialState: UpdatePostState = {
  success: false,
  data: null,
  error: null,
}

export function useUpdatePost({ post }: { post: PostSchema & { id: string } }) {
  const [state, formAction, loading] = useActionState(
    updatePostAction,
    initialState
  )
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
