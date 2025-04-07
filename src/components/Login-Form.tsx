import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { useLoginQuery } from '@/service/query/auth'
import { CircleAlert, Loader2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { LoginSchemaValidation } from '@/schema/auth'
import { useAuthContext } from '@/context/Auth-Provider'
import { useEffect } from 'react'

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { data, mutate, isError, error, isSuccess, isPending } = useLoginQuery()
  const { setAuth } = useAuthContext()

  const form = useForm<z.infer<typeof LoginSchemaValidation>>({
    resolver: zodResolver(LoginSchemaValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof LoginSchemaValidation>) {
    mutate(values)
  }

  useEffect(() => {
    if (isSuccess) {
      setAuth({
        accessToken: data.accesstoken,
        user: data.user,
      })
    }
  }, [isSuccess])

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {isError && (
        <Alert variant='destructive'>
          <CircleAlert className='w-4 h-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-6'>
                {/*////////////// E-MAIL FIELD ////////////////  */}

                <div className='grid gap-2'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='email'>E-mail Address</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            id='email'
                            placeholder='eg@easygenerator.com'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/*////////////// PASSWORD FIELD ////////////////  */}

                <div className='grid gap-2'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormControl>
                          <Input type='password' id='password' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full cursor-pointer'
                  disabled={isPending}
                >
                  {isPending && <Loader2 className='animate-spin' />}
                  {isPending ? 'Loging...' : 'Login'}
                </Button>
              </div>
              <div className='mt-4 text-center text-sm'>
                Don&apos;t have an account?{' '}
                <Link to='/signup' className='underline underline-offset-4'>
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
