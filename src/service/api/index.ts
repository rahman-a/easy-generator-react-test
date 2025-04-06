import axios from 'axios'
import { authApi } from './auth'
import { usersApi } from './users'
import { API_PREFIX, API_VERSION } from '@/lib/constants'

export const axiosInstance = axios.create({
  baseURL: `/${API_PREFIX}/${API_VERSION}`,
  withCredentials: true,
  withXSRFToken: true,
})

export const api = {
  auth: authApi,
  users: usersApi,
}
