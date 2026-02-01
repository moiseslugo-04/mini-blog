import { useFormContext } from 'react-hook-form'
import { TagDTO } from '../types'
import { PostInput } from '@/features/blog/post.schema'
import { toast } from 'sonner'
type useTagProps = {
  availableTags: TagDTO[]
  selectedTags: { name: string; displayName: string; removable?: boolean }[]
}
export function useTag({ availableTags, selectedTags }: useTagProps) {
  const { setValue, getFieldState } = useFormContext<PostInput>()
  const addTag = (tagname: string) => {
    const names = selectedTags.map((t) => t.name)
    setValue('tags', [...names, tagname], { shouldValidate: true })
    toast.success(`Tag "${tagname}" added successfully`)
  }

  const removeTag = (tagName: string) => {
    const filteredTags = selectedTags
      .filter((t) => t.name !== tagName)
      .map((t) => t.name)
    setValue('tags', filteredTags, { shouldValidate: true })
    toast.success(`Tag "${tagName}" removed successfully`)
  }
  const handleToggleTag = (tagname: string) => {
    const selectedTag = selectedTags.find((tag) => tag.name === tagname)
    if (selectedTag) return removeTag(selectedTag.name)
    addTag(tagname)
  }

  const handleNewTag = (tagName: string) => {
    const normalizedName = tagName.trim().toLowerCase()
    const exist =
      availableTags.some((t) => t.name === normalizedName) ||
      selectedTags.some((t) => t.name === normalizedName)
    if (exist) return toast.error('Tag already exist')
    const names = selectedTags.map((t) => t.name)
    setValue('tags', [...names, normalizedName], { shouldValidate: true })
  }

  const filteredAvailableTags = availableTags.filter((tag) => {
    const names = selectedTags.map((t) => t.name)
    return !names.includes(tag.name)
  })

  return {
    filteredAvailableTags,
    handleNewTag,
    handleToggleTag,
    error: getFieldState('tags').error?.message ?? null,
  }
}
