import { formattedDate } from '@lib/utils/formattedDate'
import { PostMeta } from '@/features/blog/components/PostMeta'
import { notFound } from 'next/navigation'
import { PostContent } from '@/features/blog/components/PostContent'
import { PostHeroImage } from '@/features/blog/components/PostHeroImage'
import { getPostBySlug } from '@/features/blog/blog.repository'
import { PostTags } from '@/features/tags/components/PostTags'
import { PostDTO } from '@/features/blog/types'

interface PostProps {
  params: Promise<{ slug: string }>
}
export default async function PostPage({ params }: PostProps) {
  const { slug } = await params
  const post = (await getPostBySlug(slug)) as PostDTO
  if (!post) return notFound()
  const { author, tags } = post
  const date = formattedDate(post.createdAt)
  return (
    <article className='w-full flex flex-col py-5 px-5 gap-4 max-w-3xl mx-auto overflow-y-auto!'>
      {/* Responsive banner image */}
      <PostHeroImage imageUrl={post.imageUrl} title={post.title} />
      {/*Post meta Content */}
      <PostMeta author={author.name} readTime={post.readTime} date={date} />

      {/* Tags */}
      <PostTags tags={tags} />
      {/* Post content */}
      <PostContent content={post.content} />
    </article>
  )
}
