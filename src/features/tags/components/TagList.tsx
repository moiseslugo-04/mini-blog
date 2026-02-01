import { getTagColor, TAG_STYLES } from '../../blog/utils/tag.helper'
import { TagDTO } from '../types'
import { Tag } from './Tag'

interface TagListProps {
  tags: { name: string; displayName: string; removable?: boolean }[]
  onToggleTag: (id: string) => void
  removable?: boolean
  className?: string
}

export function TagList({ tags, onToggleTag, className = '' }: TagListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => {
        const colorKey = getTagColor(tag.name)
        const styles = TAG_STYLES[colorKey] || TAG_STYLES['blue']
        return (
          <Tag
            key={tag.name}
            tag={tag}
            className={`border rounded px-2 py-1 text-sm transition ${styles.base} ${styles.hover} cursor-pointer`}
            onToggleTag={onToggleTag}
          />
        )
      })}
    </div>
  )
}
