import { PageHeader } from '@/components/PageHeader'
import { ContentTable } from '@features/dashboard/components/ContentTable'

// Static demo data
const projects = [
  {
    id: '1',
    title: 'Portfolio Website v2',
    description: 'A modern portfolio built with Next.js 15 and Tailwind CSS.',
    status: 'published' as const,
    date: 'Jan 14, 2026',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'Full-stack task management application with real-time updates.',
    status: 'draft' as const,
    date: 'Jan 8, 2026',
  },
  {
    id: '3',
    title: 'E-commerce Dashboard',
    description:
      'Admin dashboard for managing products, orders, and customers.',
    status: 'published' as const,
    date: 'Dec 20, 2025',
  },
  {
    id: '4',
    title: 'Weather App',
    description: 'Beautiful weather application with animated backgrounds.',
    status: 'published' as const,
    date: 'Dec 15, 2025',
  },
]

export default function ProjectsPage() {
  return (
    <div className='flex flex-1 flex-col overflow-hidden'>
      <main className='flex-1 overflow-y-auto'>
        <div className='mx-auto max-w-6xl px-4 py-8 lg:px-8'>
          <PageHeader
            title='Projects'
            description='Showcase your portfolio projects'
            action={{ label: 'New Project', href: '/admin/projects/new' }}
          />

          <div className='mt-8'>
            {/*  <ContentTable
              items={projects}
              emptyMessage='No projects yet. Add your first project!'
            /> */}
          </div>
        </div>
      </main>
    </div>
  )
}
