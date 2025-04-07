import axios from 'axios'
import { authApi } from './auth'
import { usersApi } from './users'
import { API_PREFIX, API_VERSION, APP_BASE_URL } from '@/lib/constants'

export const axiosInstance = axios.create({
  baseURL: `${APP_BASE_URL}/${API_PREFIX}/${API_VERSION}`,
  withCredentials: true,
  withXSRFToken: true,
})

export const api = {
  auth: authApi,
  users: usersApi,
}
