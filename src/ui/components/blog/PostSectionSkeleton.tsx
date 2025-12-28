import { Skeleton } from '@ui/components/shadcn/skeleton'
export function PostSectionSkeleton() {
  return (
    <section className='w-full flex flex-col px-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {Array(3)
          .fill(null)
          .map((_value, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-2xl border border-border bg-card'
            >
              {/* Image with Overlay*/}
              <div className='bg-gray-400 relative aspect-video w-full overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10'></div>

              {/* Content */}
              <div className='flex flex-col gap-3 grow p-2'>
                {/* Title */}
                <Skeleton className='bg-red-400!  w-full h-3' />

                {/* Meta Information */}
                <Skeleton className='bg-gray-500!  w-full h-3' />

                {/* Author and Footer */}
                <div className='mt-auto pt-4 gap- border-t border-border flex items-center justify-start'>
                  <Skeleton className=' bg-gray-400! w-12 h-12 rounded-full ' />
                  <div className='w-100 flex gap-1 flex-col'>
                    <Skeleton className=' bg-gray-400! w-full h-3' />
                    <Skeleton className=' bg-gray-400! w-30 h-3  ' />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/*    <NewsLetterCTA /> */}
    </section>
  )
}
