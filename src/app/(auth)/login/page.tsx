import { auth } from '@/lib/auth/auth'
import { UserForm } from '@components/forms/UserForm'
import { redirect } from 'next/navigation'
export default async function LoginPage() {
  const session = await auth()
  if (session?.user?.role === 'ADMIN') return redirect('/dashboard')
  return (
    <section className='max-w-sm  m-auto space-y-6 text-center'>
      <UserForm />
    </section>
  )
}
