import { formattedDate } from '@/lib/utils/formattedDate'
import { getPostWithAuthor } from '@/lib/posts/queries'
import { PostWithAuthor } from '@/lib/posts/types'
import { PostMeta } from '@/ui/components/posts/PostMeta'
import { notFound } from 'next/navigation'
import { PostContent } from '@/ui/components/posts/PostContent'
import { PostHeroImage } from '@/ui/components/posts/PostHeroImage'
export default async function PostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const { author, ...post } = (await getPostWithAuthor(slug)) as PostWithAuthor
  const date = formattedDate(post.createdAt)
  if (!post) return notFound()
  return (
    <article className='max-w-3xl flex flex-col py-5 px-5 gap-4'>
      {/* Responsive banner image */}
      <PostHeroImage imageUrl={post.imageUrl} title={post.title} />
      {/*Post meta Content */}
      <PostMeta
        author={author.name}
        category={post.category}
        readTime={post.readTime}
        date={date}
      />
      {/* Post content */}
      <PostContent content={post.content} />
    </article>
  )
}
