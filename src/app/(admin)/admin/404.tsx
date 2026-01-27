export default function NotFoundPage() {
  return (
    <div className='flex h-full items-center justify-center p-4'>
      <div className='rounded-lg border border-border bg-card p-6 text-center'>
        <h1 className='text-2xl font-semibold text-foreground'>
          Page not found
        </h1>
        <p className='mt-2 text-sm text-muted-foreground'>
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
    </div>
  )
}
