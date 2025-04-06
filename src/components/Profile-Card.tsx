import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type ProfileCardProps = {
  user: {
    name: string
    email: string
    image?: string
  }
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Card className='w-[350px]'>
      <CardContent>
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src={user?.image || ''} alt={user.name} />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-xl font-bold text-zinc-950 leading-[100%] dark:text-white pl-4'>
              {user.name}
            </p>
            <p className='text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-2 pl-4'>
              {user.email}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
