import { User, Credential } from '@/types/users'
import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from '../api'

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
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () => api.auth.logout(),
  })
}

export const useRefreshToken = () => {
  useQuery({
    queryKey: ['refresh'],
    queryFn: () => api.auth.refresh(),
  })
}
