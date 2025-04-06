import axios from 'axios'
import { authApi } from './auth'
import { usersApi } from './users'

export const axiosInstance = axios.create({
  baseURL: '/api/v1',
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject({
      name: error.response.data.name,
      message: error.response.data.message,
      status: error.response.status,
    })
  }
)

export const api = {
  auth: authApi,
  users: usersApi,
}
