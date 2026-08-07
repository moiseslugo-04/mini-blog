import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  description?: string
  action?: {
    label: string
    href: string
  }
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <h1 className='text-2xl font-semibold tracking-tight text-foreground'>
          {title}
        </h1>
        {description && (
          <p className='text-sm text-muted-foreground'>{description}</p>
        )}
      </div>
      {action && (
        <Link
          className='mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center'
          href={action.href}
        >
          <Plus className='mr-2 h-4 w-4' />
          {action.label}
        </Link>
      )}
    </div>
  )
}
