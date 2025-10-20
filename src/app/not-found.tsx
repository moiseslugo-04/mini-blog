// app/not-found.jsx (Next.js 13+ con app directory)
'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
      <h1 className='text-6xl font-extrabold mb-4'>404</h1>
      <h2 className='text-2xl mb-6'>Page Not Found</h2>
      <p className='mb-6 text-center max-w-md'>
        Oops! The page you are looking for doesn’t exist. It might have been
        removed, or you may have mistyped the URL.
      </p>
      <Link
        href='/'
        className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
      >
        Go Back Home
      </Link>
    </div>
  )
}
