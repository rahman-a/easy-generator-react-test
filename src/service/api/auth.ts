import { User, Credential } from '@/interfaces/users.interface'
import { axiosInstance } from '.'

export const authApi = {
  async register(data: User) {
    return (await axiosInstance.post('auth/register', data))?.data
  },
  async login(data: Credential) {
    return (await axiosInstance.post('auth/login', data))?.data
  },
  async logout() {
    return (await axiosInstance.post('auth/logout'))?.data
  },
  async refresh() {
    return (await axiosInstance.get('auth/refresh'))?.data
  },
  async authCheck() {
    return (await axiosInstance.get('auth/check'))?.data
  },
}
