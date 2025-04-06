export type User = {
  name: string
  email: string
  password?: string
}

export type Credential = Pick<User, 'email' | 'password'>
