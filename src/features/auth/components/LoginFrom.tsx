'use client'

import { LogIn } from 'lucide-react'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

import { useLogin } from '@features/auth/hooks/useLogin'

export function LoginForm() {
  const { loading, form, handleSubmit, error } = useLogin()

  return (
    <Card className='mx-auto mt-12 w-full max-w-md border shadow-sm'>
      <CardHeader className='space-y-4 pb-4'>
        <div className='space-y-1'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Welcome back
          </h1>

          <p className='text-sm text-muted-foreground'>
            Sign in to access the admin dashboard.
          </p>
        </div>
      </CardHeader>

      <CardContent>
        {error && (
          <div className='mb-5 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2.5 text-sm text-destructive'>
            {typeof error === 'string'
              ? error
              : 'Something went wrong. Please try again.'}
          </div>
        )}

        <Form {...form}>
          <form className='space-y-5' onSubmit={handleSubmit}>
            <FormField
              name='identifier'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username or email</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Enter your username or email'
                      disabled={loading}
                      autoComplete='username'
                      className='h-10'
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
                      {...field}
                      type='password'
                      placeholder='Enter your password'
                      disabled={loading}
                      autoComplete='current-password'
                      className='h-10'
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' disabled={loading} className='h-10 w-full'>
              {loading ? (
                <>
                  <Spinner className='mr-2' />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className='mr-2 size-4' />
                  Sign in
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
