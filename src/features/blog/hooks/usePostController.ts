import { useMemo } from 'react'
import { PostDTO } from '../types'
import { usePostForm } from './usePostForm'
import { useImageUpload } from '@shared/hooks/useImageUpload'
import { formatTagName } from '../utils/tag.helper'

type PostControllerProps = {
  defaultValues?: PostDTO
}
export function usePostController({ defaultValues }: PostControllerProps) {
  const { form, loading } = usePostForm({ post: defaultValues })
  const { loading: imageLoading, uploadImage } = useImageUpload({
    onSuccess: (url) => {
      form.setValue('imageUrl', url, {
        shouldValidate: true,
        shouldDirty: true,
      })
    },
  })

  const formTags = form.watch('tags') ?? []
  const selectedTags = useMemo(() => {
    return formTags.map((tag) => ({
      name: tag,
      displayName: formatTagName(tag),
      removable: true,
    }))
  }, [formTags])

  return { selectedTags, imageLoading, loading, form, uploadImage }
}
