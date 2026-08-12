import { ProjectSidebar } from '@/features/projects/ProjectSidebar'
import { SidebarProvider } from '@components/ui/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ProjectSidebar />
      <main className='flex flex-1 flex-col justify-center items-center  md:ml-32   '>
        <div className='flex-1 p-6 max-w-3xl w-full'>{children}</div>
      </main>
    </SidebarProvider>
  )
}
