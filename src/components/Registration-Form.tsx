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
import { CircleAlert, Loader2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { useRegisterQuery } from '@/service/query/auth'
import PasswordMatcher from './Password-Matcher'
import { RegistrationSchemaValidation } from '@/schema/auth'

export function RegistrationForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { mutateAsync, isError, error, isPending } = useRegisterQuery()

  const form = useForm<z.infer<typeof RegistrationSchemaValidation>>({
    resolver: zodResolver(RegistrationSchemaValidation),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(
    values: z.infer<typeof RegistrationSchemaValidation>
  ) {
    await mutateAsync(values)
  }

  const passwordWatch = form.watch('password')

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
          <CardTitle className='text-2xl'>New Account</CardTitle>
          <CardDescription>Create your new Account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-6'>
                {/*////////////// NAME FIELD ////////////////  */}

                <div className='grid gap-2'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <FormControl>
                          <Input id='name' placeholder='John Doe' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                  <PasswordMatcher password={passwordWatch} />
                </div>
                <Button
                  type='submit'
                  className='w-full cursor-pointer'
                  disabled={isPending}
                >
                  {isPending && <Loader2 className='animate-spin' />}
                  {isPending ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
              <div className='mt-4 text-center text-sm'>
                have an account?{' '}
                <Link to='/login' className='underline underline-offset-4'>
                  Sign in
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
