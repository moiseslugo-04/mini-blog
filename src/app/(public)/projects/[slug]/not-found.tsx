import Link from 'next/link'
import { ArrowLeft, FolderSearch } from 'lucide-react'

export default function NotFound() {
  return (
    <main className='flex min-h-[70vh] items-center justify-center px-6'>
      <div className='flex max-w-md flex-col items-center text-center'>
        <div className='mb-6 flex size-14 items-center justify-center rounded-2xl border bg-muted'>
          <FolderSearch className='size-7 text-muted-foreground' />
        </div>

        <p className='mb-2 text-lg font-medium text-muted-foreground'>404</p>

        <h1 className='text-3xl font-bold tracking-tight'>Project not found</h1>

        <p className='mt-3 text-muted-foreground'>
          The project you're looking for doesn't exist or may have been removed.
        </p>

        <Link
          href='/projects'
          className='mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
        >
          <ArrowLeft className='size-4' />
          Back to projects
        </Link>
      </div>
    </main>
  )
}
