import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from './ui/skeleton'

export function ProfileCardSkeleton() {
  return (
    <Card className='w-[350px]'>
      <CardContent>
        <div className='flex items-center gap-2'>
          <Skeleton className='w-12 h-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
