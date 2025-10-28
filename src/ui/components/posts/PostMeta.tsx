type PostMetaProps = {
  author?: string
  category?: string
  readTime?: number
  date?: string
}

export function PostMeta({ author, category, readTime, date }: PostMetaProps) {
  return (
    <div className='flex flex-wrap items-center justify-between mb-4 text-sm text-muted-foreground'>
      <div className='space-x-3'>
        <span>👤 {author ?? 'Anonymous'}</span>
        <span>🏷️ {category ?? ''}</span>
        <span>📅 {date ?? 'none'}</span>
      </div>
      <span>⏱️ {readTime ?? 1} min read</span>
    </div>
  )
}
