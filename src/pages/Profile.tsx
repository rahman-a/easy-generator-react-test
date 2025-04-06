import { ProfileCard } from '@/components/Profile-Card'
import { ProfileCardSkeleton } from '@/components/Profile-Card-Skeleton'

export default function Profile() {
  return (
    <main className='min-h-screen p-12 space-y-4'>
      <ProfileCard />
      <ProfileCardSkeleton />
    </main>
  )
}
