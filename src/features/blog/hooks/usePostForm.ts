import { PostSchema, postSchema } from '@features/blog/post.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PostDTO } from '../types'

interface PostFormProps {
  post?: PostDTO & { newTags?: string[] }
}
export function usePostForm({ post }: PostFormProps = {}) {
  const form = useForm<PostSchema>({
    defaultValues: {
      title: post?.title ?? '',
      description: post?.description ?? '',
      content: post?.content ?? '',
      tags: post?.tags.map((t) => t.name) ?? [],
      readTime: post?.readTime ?? 1,
      imageUrl: post?.imageUrl ?? '',
      published: post?.published ?? false,
    },
    mode: 'onChange',
    resolver: zodResolver(postSchema),
  })

  return {
    form,
    loading: form.formState.isSubmitting,
  }
}
