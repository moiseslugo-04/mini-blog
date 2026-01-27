import { Input } from '@shared/ui/input'
import { Label } from '@shared/ui/label'
import { Camera } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar'
import { getUserProfile } from '../user.service'
export async function Profile() {
  const profile = await getUserProfile()
  if (profile.user === null) throw new Error('User not found')
  const { firstName, lastName, avatarUrl, email, bio } = profile.user
  const avatarFallback = firstName.charAt(0) + lastName.charAt(0)
  return (
    <section className='mt-8'>
      <div className='mt-6 rounded-xl border border-border bg-card p-6'>
        {/* Avatar */}
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <Avatar className='h-20 w-20'>
              <AvatarImage src={avatarUrl} alt='Profile' />
              <AvatarFallback className='bg-secondary text-lg font-medium'>
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <button
              type='button'
              className='absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-colors hover:bg-muted'
            >
              <Camera className='h-3.5 w-3.5 text-muted-foreground' />
            </button>
          </div>
          <div>
            <p className='font-medium text-foreground'>Profile Photo</p>
            <p className='text-sm text-muted-foreground'>
              JPG, PNG or GIF. Max 2MB.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className='mt-6 grid gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <Label htmlFor='firstName'>{firstName}</Label>
            <Input id='firstName' defaultValue={firstName} />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='lastName'>Last name</Label>
            <Input id='lastName' defaultValue={lastName} />
          </div>
          <div className='space-y-2 sm:col-span-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' defaultValue={email} />
          </div>
          <div className='space-y-2 sm:col-span-2'>
            <Label htmlFor='bio'>Bio</Label>
            <textarea
              id='bio'
              rows={3}
              className='flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              placeholder='Tell visitors a little about yourself...'
              defaultValue={bio}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
