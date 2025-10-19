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
import { Button } from '../shadcn/button'
import { Spinner } from '@components/shadcn/spinner'
import { useLogin } from '@/lib/hooks/useLogin'

export function UserForm() {
  const { loading, form, handleSubmit, error } = useLogin()

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
            {/* Show generic error */}
            {error && (
              <div className='mb-4 text-red-600 text-sm font-medium text-center'>
                {typeof error === 'string'
                  ? error
                  : 'Something went wrong. Please try again.'}
              </div>
            )}

            <Form {...form}>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <FormField
                  name='identifier'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username or Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='@username'
                          {...field}
                          disabled={loading}
                        />
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
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type='submit'
                  disabled={loading}
                  className='cursor-pointer w-full'
                >
                  {loading ? (
                    <>
                      <Spinner className='mr-2' />
                      Logging in...
                    </>
                  ) : (
                    <>
                      <LogIn className='mr-2' />
                      Login
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </>
      )}
    </Card>
  )
}
