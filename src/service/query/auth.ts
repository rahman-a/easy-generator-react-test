import { User, Credential } from '@/interfaces/users.interface'
import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from '../api'
import { useAuthContext } from '@/context/Auth-Provider'

export const useRegisterQuery = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: (data: User) => api.auth.register(data),
  })
}

export const useLoginQuery = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (data: Credential) => api.auth.login(data),
  })
}

export const useLogoutQuery = () => {
  const { setAuth } = useAuthContext()
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () => api.auth.logout(),
    onSuccess() {
      setAuth(null)
    },
  })
}

export const useRefreshTokenQuery = () => {
  return useQuery({
    queryKey: ['refresh'],
    queryFn: () => api.auth.refresh(),
  })
}
