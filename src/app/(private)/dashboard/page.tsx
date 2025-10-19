import Link from 'next/link'
import { Button } from '@components/shadcn/button'
import { Plus } from 'lucide-react'
import { PanelAdmin } from '@/ui/components/dashboard/PanelAdmin'
export default async function DashboardPage() {
  return (
    <div className='flex flex-col gap-6 p-4 sm:p-6 max-w-6xl mx-auto w-full'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
        <h1 className='text-2xl font-semibold'>Dashboard (Admin)</h1>
        <Link href='/dashboard/blog/new'>
          <Button className='flex items-center gap-2 w-full sm:w-auto cursor-pointer'>
            <Plus size={16} />
            New Post
          </Button>
        </Link>
      </div>
      <PanelAdmin />
    </div>
  )
}
