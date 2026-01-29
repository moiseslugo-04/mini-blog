import { Suspense } from 'react'
import { Navbar } from '@shared/navbar'
import { Footer } from '@/shared/Footer'
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col '>
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar />
      </Suspense>
      {children}
      <Footer />
    </div>
  )
}
