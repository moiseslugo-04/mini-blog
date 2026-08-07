'use client'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, Pencil, Trash2, Eye } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { PostDTO } from '@/features/blog/types'
import { formattedDate } from '@/lib/utils/formattedDate'
import Link from 'next/link'
import { deletePostAction } from '@/features/blog/server.actions'

interface ContentTableProps {
  items: PostDTO[]
  emptyMessage?: string
}

export function ContentTable({
  items,
  emptyMessage = 'No items found',
}: ContentTableProps) {
  if (items.length === 0) {
    return (
      <div className='flex h-32 items-center justify-center rounded-xl border border-dashed border-border bg-card'>
        <p className='text-sm text-muted-foreground'>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className='overflow-hidden rounded-xl border border-border bg-card'>
      <table className='w-full'>
        <thead>
          <tr className='border-b border-border bg-muted/30'>
            <th className='px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground'>
              Title
            </th>
            <th className='hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground md:table-cell'>
              Status
            </th>
            <th className='hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground sm:table-cell'>
              Date
            </th>
            <th className='px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-border'>
          {items.map((item) => (
            <tr key={item.id} className='transition-colors hover:bg-muted/20'>
              <td className='px-4 py-4'>
                <div>
                  <p className='font-medium text-foreground'>{item.title}</p>
                  <p className='mt-0.5 text-sm text-muted-foreground line-clamp-1'>
                    {item.description}
                  </p>
                </div>
              </td>
              <td className='hidden px-4 py-4 md:table-cell'>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                    item.published
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  )}
                >
                  {item.published ? 'Published' : 'Draft'}
                </span>
              </td>
              <td className='hidden px-4 py-4 sm:table-cell'>
                <span className='text-sm text-muted-foreground'>
                  {formattedDate(item.createdAt)}
                </span>
              </td>
              <td className='px-4 py-4 text-right'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon' className='h-8 w-8'>
                      <MoreHorizontal className='h-4 w-4' />
                      <span className='sr-only'>Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end' className='w-40'>
                    <DropdownMenuItem>
                      <Link
                        href={`/blog/${item.slug}`}
                        className='flex items-center'
                      >
                        <Eye className='mr-2 h-4 w-4' />
                        View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/admin/posts/edit/${item.slug}`}
                        className='flex items-center'
                      >
                        <Pencil className='mr-2 h-4 w-4' />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className='text-destructive focus:text-destructive'
                      asChild
                    >
                      <Button
                        variant={'outline'}
                        onClick={() => deletePostAction(item.id)}
                      >
                        <Trash2 className='mr-2 h-4 w-4' />
                        Delete
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
