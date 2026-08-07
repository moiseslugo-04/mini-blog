import { Suspense } from 'react'
import { Navbar } from '@/components/navbar/Navbar'
import { Footer } from '@/components/Footer'
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col overflow-hidden '>
      <div className='relative'>
        <Suspense fallback={<p>Loading...</p>}>
          <Navbar />
        </Suspense>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center pt-15'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
