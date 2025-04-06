import { InternalAxiosRequestConfig } from 'axios'

export type ExtendedAxiosRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean
}
