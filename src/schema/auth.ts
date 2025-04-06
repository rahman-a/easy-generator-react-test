import { z } from 'zod'

export const LoginSchemaValidation = z.object({
  email: z
    .string({
      message: 'Please enter your email',
    })
    .email({
      message: 'E-mail must be correct',
    }),
  password: z
    .string({
      message: 'Please enter your password',
    })
    .min(8, {
      message: 'Password must contain at least 8 character(s)',
    }),
})

export const RegistrationSchemaValidation = z.object({
  name: z
    .string({
      message: 'Please enter your name',
    })
    .min(3, {
      message: 'Name must contain at least 3 character(s)',
    }),
  email: z
    .string({
      message: 'Please enter your email',
    })
    .email({
      message: 'E-mail must be correct',
    }),
  password: z
    .string({
      message: 'Please enter your password',
    })
    .min(8, {
      message: 'Password must contain at least 8 character(s)',
    })
    .refine(
      (value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(value),
      'Please match the requirements'
    ),
})
