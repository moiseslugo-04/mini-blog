// hooks/posts/useCreatePost.ts
import { useRouter } from 'next/navigation'
import { updatePostAction } from '@features/posts/server/post.actions'
import { useForm } from '@lib/hooks/useForm'
import {
  PostSchema,
  postSchema,
} from '@/lib/features/posts/client/schema/posts'
import { SubmitHandler } from 'react-hook-form'

export function usePostForm({ post }: { post: PostSchema & { id: string } }) {
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
  const onSubmit: SubmitHandler<PostSchema> = async (data) => {
    try {
      const formData = new FormData()
      formData.append('id', post.id)
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString())
        }
      })
      //start action
      await updatePostAction(formData)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    form,
    loading: form.formState.isSubmitting,
    onSubmit,
  }
}
