import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github-dark.css'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPostBySlug } from '@/lib/posts/actions'
import { getUserById } from '@/lib/auth/actions'

export default async function PostPage({ params }: { params: Promise<any> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()
  const user = await getUserById(post.authorId)

  // ✅ Format date
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <article className='w-full flex flex-col py-5 px-5 gap-4'>
      {/* Responsive banner image */}
      {post.imageUrl && (
        <div className='relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-6'>
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className='object-cover object-center'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
          <h1 className='absolute bottom-4 left-4 md:bottom-6 md:left-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg max-w-[90%] leading-tight'>
            {post.title}
          </h1>
        </div>
      )}

      <PostMeta
        author={user?.name || 'Anonymous'}
        category={post.category ?? ''}
        readTime={post.readTime ?? 1}
        date={formattedDate}
      />

      {/* ✅ Post content */}
      <div className='w-full prose prose-invert prose-zinc max-w-none leading-relaxed text-sm sm:text-base'>
        <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}

type PostMetaProps = {
  author: string
  category: string
  readTime: number
  date: string
}

/* ✅ New reusable component */
function PostMeta({ author, category, readTime, date }: PostMetaProps) {
  return (
    <div className='flex flex-wrap items-center justify-between mb-4 text-sm text-muted-foreground'>
      <div className='space-x-3'>
        <span>👤 {author}</span>
        <span>🏷️ {category}</span>
        <span>📅 {date}</span>
      </div>
      <span>⏱️ {readTime} min read</span>
    </div>
  )
}
