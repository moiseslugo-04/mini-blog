import Link from 'next/link'
import Image from 'next/image'
import { formattedDate } from '@/lib/utils/formattedDate'
import { PostWithAuthor } from '@/lib/posts/types'
export async function PostCard({
  postWithAuthor,
}: {
  postWithAuthor: PostWithAuthor
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
        hover:-translate-y-1 hover:shadow-lg
      '
    >
      {/* Image */}
      <div className='relative aspect-video w-full bg-muted'>
        <Image
          src={post.imageUrl || '/default-product.webp'}
          alt={post.title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />

        {/* Subtle gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-4 p-5'>
        {/* Title */}
        <h2 className='text-lg font-semibold leading-snug line-clamp-2 transition-colors group-hover:text-primary'>
          {post.title}
        </h2>

        {/* Meta */}
        <div className='flex items-center justify-between text-xs text-muted-foreground'>
          {/* Author */}
          <div className='flex items-center gap-2'>
            <Image
              src={author.avatarUrl ?? '/default-user.jpg'}
              alt={author.name ?? 'Author'}
              width={24}
              height={24}
              className='rounded-full border border-border'
            />
            <span className='font-medium text-foreground'>
              {author.name ?? 'Unknown'}
            </span>
          </div>

          {/* Read time */}
          <span>{post.readTime || 5} min read</span>
        </div>

        {/* Date */}
        <span className='text-xs text-muted-foreground'>{date}</span>
      </div>
    </Link>
  )
}
