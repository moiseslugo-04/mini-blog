// components/posts/PostCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { formattedDate } from '@/lib/utils/formattedDate'
import { Calendar, Clock } from 'lucide-react'
import { PostDTO } from '@/lib/features/posts/types'

export async function PostCard({
  postWithAuthor,
}: {
  postWithAuthor: PostDTO
}) {
  const { author, ...post } = postWithAuthor
  const date = formattedDate(post.createdAt)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className='
        group flex flex-col overflow-hidden rounded-2xl
        border border-border bg-card
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        h-full
      '
    >
      {/* Image with Overlay*/}
      <div className='relative aspect-video w-full overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10'>
        <Image
          src={post.imageUrl || '/default-product.webp'}
          alt={post.title}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-110'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

        {/* Category Badge */}
        {post.category && (
          <div className='absolute top-4 left-4'>
            <span className='px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium'>
              {post.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='flex flex-col grow p-6'>
        {/* Title */}
        <h2 className='text-xl font-bold leading-snug line-clamp-2 mb-4 group-hover:text-primary transition-colors'>
          {post.title}
        </h2>

        {/* Excerpt (si tienes un campo excerpt en tu post, añádelo aquí) */}
        {/* {post.excerpt && (
          <p className='text-muted-foreground text-sm line-clamp-3 mb-6'>
            {post.excerpt}
          </p>
        )} */}

        {/* Meta Information */}
        <div className='flex items-center gap-4 text-sm text-muted-foreground mb-6'>
          <div className='flex items-center gap-2'>
            <Clock className='w-4 h-4' />
            <span>{post.readTime || 5} min read</span>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' />
            <span>{date}</span>
          </div>
        </div>

        {/* Author and Footer */}
        <div className='mt-auto pt-6 border-t border-border flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
              <span className='font-bold text-primary'>ML</span>
            </div>
            <div>
              <div className='font-semibold text-foreground'>
                {author.name ?? 'Unknown'}
              </div>
              <div className='text-xs text-muted-foreground'>
                Frontend Developer
              </div>
            </div>
          </div>

          {/* Read Arrow */}
          <div className='opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300'>
            <div className='w-22 h-10  rounded-full bg-primary/10 flex items-center gap-2 justify-center hover:underline'>
              <span className='text-sm '>Read</span>
              <svg
                className='w-5 h-5 text-primary'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
