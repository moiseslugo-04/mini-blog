import Link from 'next/link'
import Image from 'next/image'
import { PostSchema } from '@/lib/schemas/posts'

export function PostCard({ post }: { post: PostSchema }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='
        flex flex-col rounded-xl border border-border bg-card 
        overflow-hidden shadow-sm hover:shadow-md transition-all duration-300
        hover:scale-[1.02] group
      '
    >
      {/* Main image*/}
      <div className='relative w-full aspect-[16/9] bg-muted'>
        <Image
          src={post.imageUrl || '/default-product.webp'}
          alt={post.title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          priority={false}
        />
        {/* Light Overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-3 p-5'>
        {/* Title */}
        <h2
          className='
            text-lg sm:text-xl font-semibold text-foreground 
            group-hover:text-primary transition-colors line-clamp-2
          '
        >
          {post.title}
        </h2>

        {/* Author and time information */}
        <div className='flex items-center justify-between text-sm text-muted-foreground'>
          <div className='flex items-center gap-2'>
            <Image
              alt='User avatar'
              src='/default-user.jpg'
              width={28}
              height={28}
              className='rounded-full border border-border'
            />
            <span className='font-medium text-foreground'>Moises Lugo</span>
          </div>
          <span className='text-xs sm:text-sm'>
            ⏱️ {post.readTime || 5} min read
          </span>
        </div>
      </div>
    </Link>
  )
}
