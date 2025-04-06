import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => api.users.profile(),
  })
}
