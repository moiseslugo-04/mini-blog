import { PageHeader } from '@/components/PageHeader'
import { StatsCard } from '@features/dashboard/components/StatCard'
import { FileText, FolderKanban, Eye, Send } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className='flex  bg-background '>
      {/* Main Content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        <main className='flex-1 overflow-y-auto'>
          <div className='mx-auto max-w-6xl px-4 py-8 lg:px-8'>
            <PageHeader
              title='Dashboard'
              description='Overview of your portfolio content'
            />

            {/* Stats Grid */}
            <div className='mt-12 grid gap-4 md:grid-cols-2 '>
              <StatsCard
                title='Total Posts'
                value={1}
                description='1 published this month'
                icon={FileText}
              />
              <StatsCard
                title='Total Projects'
                value={0}
                description='2 in progress'
                icon={FolderKanban}
              />
              <StatsCard
                title='Published'
                value={1}
                description='Live on your portfolio'
                icon={Send}
              />
              <StatsCard
                title='Page Views'
                value='2.4k'
                description='Last 30 days'
                icon={Eye}
                trend={{ value: 12, positive: true }}
              />
            </div>

            {/* Recent Posts 
            <section className='mt-10'>
              <div className='mb-4 flex items-center justify-between'>
                <h2 className='text-lg font-semibold text-foreground'>
                  Recent Posts
                </h2>
                <Button variant='ghost' size='sm' asChild>
                  <Link href='/posts' className='gap-1'>
                    View all
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </Button>
              </div>
              <ContentTable
                items={recentPosts}
                emptyMessage='No posts yet. Create your first post!'
              /> 
            </section>
            */}
          </div>
        </main>
      </div>
    </div>
  )
}
