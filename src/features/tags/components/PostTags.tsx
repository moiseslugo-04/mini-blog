import Link from 'next/link'
import { TagDTO } from '../types'

interface PostTagsProps {
  tags: TagDTO[]
}

export function PostTags({ tags }: PostTagsProps) {
  if (!tags.length) return null
  return (
    <ul className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link
            href={`/blog/tags/${tag.slug}`}
            className='
              text-sm
              px-3 py-1
              rounded-full
              bg-muted
              hover:bg-muted/80
              transition
            '
          >
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
