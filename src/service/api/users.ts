import { axiosInstance } from '.'

export const usersApi = {
  async profile() {
    return (await axiosInstance.get('users/profile')).data
  },
}
