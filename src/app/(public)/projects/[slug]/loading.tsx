import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <main className='mx-auto w-full max-w-5xl px-4 py-8 md:px-8 md:py-12'>
      <div className='space-y-8'>
        {/* Project image */}
        <Skeleton className='aspect-video w-full rounded-2xl' />

        {/* Project info */}
        <div className='max-w-3xl space-y-5'>
          <div className='space-y-3'>
            {/* Label */}
            <Skeleton className='h-4 w-20' />

            {/* Title */}
            <Skeleton className='h-10 w-2/3' />

            {/* Description */}
            <div className='space-y-2'>
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-5/6' />
            </div>
          </div>

          {/* Buttons */}
          <div className='flex gap-3'>
            <Skeleton className='h-10 w-32 rounded-lg' />
            <Skeleton className='h-10 w-40 rounded-lg' />
          </div>
        </div>
      </div>

      {/* About */}
      <section className='mt-20 max-w-3xl space-y-5 border-t pt-10'>
        <Skeleton className='h-4 w-20' />

        <Skeleton className='h-8 w-64' />

        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-4/5' />
        </div>
      </section>

      {/* Tech Stack */}
      <section className='mt-20 space-y-6 border-t pt-10'>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-28' />
          <Skeleton className='h-8 w-40' />
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className='h-24 w-full rounded-xl' />
          ))}
        </div>
      </section>
    </main>
  )
}
