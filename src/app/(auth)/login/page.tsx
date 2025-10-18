import { UserForm } from '@components/forms/UserForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <section className='max-w-sm mx-auto space-y-6 text-center'>
      <UserForm />
    </section>
  )
}
