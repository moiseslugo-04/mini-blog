import {
  SidebarContent,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@components/ui/sidebar'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { menuItems } from './constants'
export function ProjectSidebar() {
  return (
    <Sidebar className='border-r'>
      <SidebarHeader className='border-b px-4 py-4'>
        <Link
          href='/projects'
          className='group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeft className='size-4 transition-transform group-hover:-translate-x-1' />
          Go back
        </Link>
      </SidebarHeader>

      <SidebarContent className='px-2 py-4'>
        <div className='mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
          Project
        </div>

        <SidebarMenu>
          {menuItems.map(({ label, icon: Icon, href }) => (
            <SidebarMenuItem key={label}>
              <Link
                href={`#${href}`}
                className='
                    group flex w-full items-center gap-3 rounded-lg
                    px-3 py-2.5 text-sm text-muted-foreground
                    transition-all
                    hover:bg-accent hover:text-accent-foreground
                  '
              >
                <Icon className='size-4 transition-colors group-hover:text-foreground' />
                <span>{label}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
