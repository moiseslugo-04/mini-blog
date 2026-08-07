import { PageHeader } from '@/components/PageHeader'
import { Input } from '@/components/ui/input'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Profile } from '@/features/users/components/Profile'
import { Suspense } from 'react'
export const dynamic = 'force-dynamic'

export default function SettingsPage() {
  return (
    <section className='flex-1 overflow-y-auto'>
      <div className='mx-auto max-w-3xl px-4 py-8 lg:px-8'>
        <PageHeader
          title='Settings'
          description='This information will be displayed on your portfolio.'
        />
        {/* Profile Section */}
        <Suspense fallback={<div>Loading profile...</div>}>
          <Profile />
        </Suspense>
        {/* Social Links */}
        <section className='mt-8'>
          <h2 className='text-base font-semibold text-foreground'>
            Social Links
          </h2>
          <p className='mt-1 text-sm text-muted-foreground'>
            Connect your social profiles to your portfolio.
          </p>

          <div className='mt-6 rounded-xl border border-border bg-card p-6'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-secondary'>
                  <Github className='h-5 w-5 text-foreground' />
                </div>
                <Input
                  placeholder='github.com/username'
                  defaultValue='github.com/johndoe'
                  className='flex-1'
                />
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-secondary'>
                  <Linkedin className='h-5 w-5 text-foreground' />
                </div>
                <Input
                  placeholder='linkedin.com/in/username'
                  defaultValue='linkedin.com/in/johndoe'
                  className='flex-1'
                />
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-secondary'>
                  <Twitter className='h-5 w-5 text-foreground' />
                </div>
                <Input placeholder='twitter.com/username' className='flex-1' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
/* 

        <section className='mt-8'>
          <h2 className='text-base font-semibold text-foreground'>
            Preferences
          </h2>
          <p className='mt-1 text-sm text-muted-foreground'>
            Customize your dashboard experience.
          </p>

          <div className='mt-6 rounded-xl border border-border bg-card divide-y divide-border'>
            <div className='flex items-center justify-between p-4'>
              <div>
                <p className='font-medium text-foreground'>
                  Email notifications
                </p>
                <p className='text-sm text-muted-foreground'>
                  Receive email updates about your portfolio
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className='flex items-center justify-between p-4'>
              <div>
                <p className='font-medium text-foreground'>Public profile</p>
                <p className='text-sm text-muted-foreground'>
                  Make your portfolio visible to everyone
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className='flex items-center justify-between p-4'>
              <div>
                <p className='font-medium text-foreground'>Show draft count</p>
                <p className='text-sm text-muted-foreground'>
                  Display number of draft posts on dashboard
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </section> */
