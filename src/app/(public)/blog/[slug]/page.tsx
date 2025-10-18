import { prisma } from '@lib/prisma'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github-dark.css'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPostBySlug } from '@/lib/posts/actions'
import { getUserById } from '@/lib/auth/actions'
import { Suspense } from 'react'
export default async function PostPage({ params }: { params: Promise<any> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()
  const user = await getUserById(post.authorId)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <article className='w-full flex flex-col py-5 px-3 gap-4'>
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
            {/*Soft Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
            {/* Adaptive title */}
            <h1 className='absolute bottom-4 left-4 md:bottom-6 md:left-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg max-w-[90%] leading-tight'>
              {post.title}
            </h1>
          </div>
        )}

        {/* Info del post */}
        <div className='flex flex-wrap items-center justify-between mb-4 text-sm text-muted-foreground'>
          <div className='space-x-3'>
            <span>👤 {user?.name || 'Anonymous'}</span>
            <span>🏷️ {post.category}</span>
          </div>
          <span>⏱️ {post.readTime} min read</span>
        </div>

        {/* Post content*/}
        <div className='w-full prose prose-invert prose-zinc max-w-none leading-relaxed text-sm sm:text-base'>
          <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </Suspense>
  )
}
