import { User, Credential } from '@/types/users'
import { axiosInstance } from '.'

export const authApi = {
  async register(data: User) {
    return (await axiosInstance.post('auth/register', data)).data
  },
  async login(data: Credential) {
    return (await axiosInstance.post('auth/login', data)).data
  },
  async logout() {
    return (await axiosInstance.post('auth/logout')).data
  },
  async refresh() {
    return (await axiosInstance.post('auth/refresh')).data
  },
}
