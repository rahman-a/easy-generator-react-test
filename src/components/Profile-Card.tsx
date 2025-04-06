import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function ProfileCard() {
  return (
    <Card className='w-[350px]'>
      <CardContent>
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src='https://github.com/shadn.png' alt='@shadcn' />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-xl font-bold text-zinc-950 leading-[100%] dark:text-white pl-4'>
              Ahmed Abdelrahman
            </p>
            <p className='text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-2 pl-4'>
              ahm@gmail.com
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
