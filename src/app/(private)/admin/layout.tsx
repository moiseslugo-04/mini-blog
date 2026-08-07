import { Sidebar } from '@/features/dashboard/components/Sidebar'
import { TopBar } from '@/features/dashboard/components/TopBar'
import { Footer } from '@/components/Footer'
import { Suspense } from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex w-full flex-1 min-h-dvh'>
      {/* Sidebar desktop */}
      <aside className='hidden lg:block'>
        <Sidebar />
      </aside>

      {/* Main area */}
      <div className='flex flex-1 flex-col max-h-screen '>
        <TopBar />
        {/* Scroll container */}
        <main className='flex-1 overflow-y-auto bg-background p-4'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
