// hooks/posts/useCreatePost.ts
import { useActionState } from 'react'
import { useRouter } from 'next/navigation'
import {
  createPostAction,
  CreatePostState,
} from '@features/posts/server/post.actions'
import { useForm } from '@lib/hooks/useForm'
import {
  PostSchema,
  postSchema,
} from '@/lib/features/posts/client/schema/posts'

const initialState: CreatePostState = {
  success: false,
  data: null,
  error: null,
}

export function useCreatePost() {
  const [state, formAction, loading] = useActionState(
    createPostAction,
    initialState
  )
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
  const handleSubmit = (data: PostSchema) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString())
    })
    formAction(formData)
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
