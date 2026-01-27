type PostMetaProps = {
  author?: string
  readTime?: number
  date?: string
}

export function PostMeta({ author, readTime, date }: PostMetaProps) {
  return (
    <div className='flex flex-wrap items-center justify-between mb-4 text-sm text-muted-foreground'>
      <div className='space-x-3'>
        <span>👤 {author ?? 'Anonymous'}</span>
        <span>📅 {date ?? 'none'}</span>
      </div>
      <span>⏱️ {readTime ?? 1} min read</span>
    </div>
  )
}
