import { LoginForm } from '@/features/auth/components/LoginFrom'
export default async function LoginPage() {
  return (
    <section className='max-w-sm  m-auto space-y-6 text-center'>
      <LoginForm />
    </section>
  )
}
