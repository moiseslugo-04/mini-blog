'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 dark:from-gray-900 dark:to-gray-950 dark:text-gray-100 px-4 transition-colors duration-500'>
      <div className='text-center animate-fade-in-up'>
        <h1 className='text-[8rem] font-extrabold text-blue-600 dark:text-blue-400 drop-shadow-sm mb-2'>
          404
        </h1>
        <h2 className='text-3xl font-semibold mb-4'>Page Not Found</h2>
        <p className='text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8'>
          Sorry, we couldn’t find the page you’re looking for. It might have
          been removed, renamed, or doesn’t exist anymore.
        </p>
        <Link
          href='/'
          className='inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300'
        >
          Go Back Home
        </Link>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </main>
  )
}
