import { cn } from '@/lib/utils'

type Props = {
  password: string
}

export default function PasswordMatcher({ password }: Props) {
  const passwordRequirements = [
    {
      id: 1,
      text: 'Minimum length of 8 characters.',
      match: password.length >= 8,
    },
    {
      id: 2,
      text: 'At least one letter.',
      match: /[a-z]/.test(password) || /[A-Z]/.test(password),
    },
    {
      id: 3,
      text: 'At least one number',
      match: /\d/.test(password),
    },
    {
      id: 4,
      text: 'At least one special character.',
      match: /[!@#$%^*&().,|<>]/.test(password),
    },
  ]
  return (
    <ul className='flex flex-col gap-2'>
      {passwordRequirements.map((requirement) => (
        <PasswordRequirementItem
          key={requirement.id}
          requirement={requirement.text}
          match={requirement.match}
        />
      ))}
    </ul>
  )
}

type PasswordRequirementItemProps = {
  requirement: string
  match: boolean
}

function PasswordRequirementItem({
  requirement,
  match,
}: PasswordRequirementItemProps) {
  return (
    <li className='flex items-center gap-2'>
      <span
        className={cn('w-1 h-1 bg-gray-500 rounded-full', {
          'bg-green-500': match,
        })}
      />
      <span
        className={cn('text-gray-500 text-xs', {
          'text-green-500': match,
        })}
      >
        {requirement}
      </span>
    </li>
  )
}
