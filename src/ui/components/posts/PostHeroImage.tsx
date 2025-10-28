import Image from 'next/image'
interface PostHeroImageProps {
  imageUrl: string
  title: string
  className?: string
}
export function PostHeroImage({
  imageUrl,
  title,
  className,
}: PostHeroImageProps) {
  return (
    <div
      className={`relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-6 ${className}`}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className='object-cover object-center'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
      <h1 className='absolute bottom-4 left-4 md:bottom-6 md:left-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg max-w-[90%] leading-tight'>
        {title}
      </h1>
    </div>
  )
}
