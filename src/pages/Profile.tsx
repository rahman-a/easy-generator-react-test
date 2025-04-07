import { ProfileCard } from '@/components/Profile-Card'
import { ProfileCardSkeleton } from '@/components/Profile-Card-Skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useUserProfile } from '@/service/query/users'

export default function Profile() {
  const { data, isError, error, isSuccess, isPending } = useUserProfile()

  return (
    <main className='min-h-screen p-12 space-y-4'>
      {isError && (
        <Alert>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}
      {isPending ? (
        <ProfileCardSkeleton />
      ) : (
        isSuccess && <ProfileCard user={data} />
      )}
    </main>
  )
}
