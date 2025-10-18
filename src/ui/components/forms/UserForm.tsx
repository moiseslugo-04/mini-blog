'use client'
import { LogIn } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/shadcn/form'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/shadcn/card'
import { Input } from '@components/shadcn/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@/lib/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../shadcn/button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Spinner } from '@components/shadcn/spinner'
export function UserForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  const handleSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setLoading(true)

    try {
      const res = await signIn('credentials', {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      })
      console.log(res)
      if (res.error) throw new Error(res?.code || 'Unknown error')
      router.push('/dashboard')
    } catch (error) {
      if (error && error instanceof Error) {
        const input =
          error.message === 'Invalid password' ? 'password' : 'identifier'
        form.setError(input, {
          type: 'manual',
          message: error.message,
        })
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <Card className='min-w-[300px] min-h-[300px] basis-2xl flex flex-col items-center justify-center mx-auto mt-10 shadow-lg border border-gray-200'>
      {loading ? (
        <Button variant='outline' disabled size='sm'>
          <Spinner />
          Login....
        </Button>
      ) : (
        <>
          <CardHeader>
            <CardTitle className='text-xl font-semibold'>Login Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className='space-y-6'
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <FormField
                  name='identifier'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username or Email</FormLabel>
                      <FormControl>
                        <Input placeholder='@username' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type='password'
                          placeholder='***********'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className='cursor-pointer'>
                  Login <LogIn />
                </Button>
              </form>
            </Form>
          </CardContent>
        </>
      )}
    </Card>
  )
}
