import type { LucideIcon } from 'lucide-react'
import { cn } from '@lib/utils'

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: {
    value: number
    positive: boolean
  }
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: StatsCardProps) {
  return (
    <div className='rounded-xl border border-border bg-card p-6'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-medium text-muted-foreground'>
          {title}
        </span>
        <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-secondary'>
          <Icon className='h-5 w-5 text-muted-foreground' />
        </div>
      </div>
      <div className='mt-3'>
        <span className='text-3xl font-semibold tracking-tight text-foreground'>
          {value}
        </span>
        {trend && (
          <span
            className={cn(
              'ml-2 text-sm font-medium',
              trend.positive ? 'text-emerald-600' : 'text-red-600'
            )}
          >
            {trend.positive ? '+' : ''}
            {trend.value}%
          </span>
        )}
      </div>
      {description && (
        <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
      )}
    </div>
  )
}
