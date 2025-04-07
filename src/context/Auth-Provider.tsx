/* eslint-disable react-refresh/only-export-components */
import { ExtendedAxiosRequestConfig } from '@/interfaces/api.interface'
import { api, axiosInstance } from '@/service/api'
import { AxiosError } from 'axios'
import React, {
  createContext,
  useLayoutEffect,
  useContext,
  useState,
  useEffect,
} from 'react'

type AuthProps = {
  accessToken: string
  user?:
    | {
        _id: string
        name: string
        email: string
      }
    | undefined
}

type AuthContextProps = {
  auth: AuthProps | null | undefined
  setAuth: React.Dispatch<React.SetStateAction<AuthProps | null | undefined>>
  isAuthChecking: boolean
}

const intitalState: AuthContextProps = {
  auth: null,
  setAuth: () => null,
  isAuthChecking: true,
}

const AuthContext = createContext<AuthContextProps>(intitalState)

const AuthProvider = ({ children }: React.ComponentProps<'div'>) => {
  const [auth, setAuth] = useState<AuthContextProps['auth']>()
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsAuthChecking(true)
      try {
        const response = await api.auth.authCheck()
        setAuth({ ...response })
      } finally {
        setIsAuthChecking(false)
      }
    }
    checkAuthentication()
  }, [])

  useLayoutEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config: ExtendedAxiosRequestConfig) => {
        config.headers.Authorization =
          auth?.accessToken && !config._retry
            ? `Bearer ${auth?.accessToken}`
            : config.headers.Authorization
        return config
      },
      (error) => Promise.reject(error)
    )
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
    }
  }, [auth?.accessToken])

  useLayoutEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const request: ExtendedAxiosRequestConfig | undefined = error.config
        if (
          error?.response?.status === 403 &&
          (error?.response?.data as { message?: string })?.message ===
            'invalid token'
        ) {
          try {
            const data = await api.auth.refresh()
            setAuth({ ...data })
            if (request && request.headers) {
              request.headers.Authorization = `Bearer ${data.accessToken}`
              request._retry = true
            }
            if (request) {
              return axiosInstance(request)
            }
          } catch {
            setAuth(null)
          }
        }
        if (!request?._retry) {
          return Promise.reject({
            name: (error.response?.data as { name: string })?.name,
            message: (error.response?.data as { message: string })?.message,
            status: error.response?.status,
          })
        }
      }
    )
    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuthChecking }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error('useAuthContext must be used within a AuthProvider')

  return context
}

export { useAuthContext }

export default AuthProvider
