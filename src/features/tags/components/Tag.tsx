import { X } from 'lucide-react'
import { TagDTO } from '../types'

interface TagProps {
  tag: { name: string; displayName: string; removable?: boolean }
  className: string
  onToggleTag: (tag: string) => void
}

export function Tag({ tag, className, onToggleTag }: TagProps) {
  return (
    <span className={className} onClick={() => onToggleTag(tag.name)}>
      {tag.displayName}
      {tag.removable && (
        <button
          type='button'
          className='focus:outline-none'
          aria-label={`Remove ${tag} tag`}
        >
          <X size={14} />
        </button>
      )}
    </span>
  )
}
