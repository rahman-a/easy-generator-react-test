import { useAuthContext } from '@/context/Auth-Provider'
import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { Loader } from './Loader'

export default function AuthRoute({ children }: React.ComponentProps<'div'>) {
  const { auth, isAuthChecking } = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') navigate('/dashboard', { replace: true })
  }, [location.pathname])

  if (isAuthChecking) return <Loader />

  if (!auth?.user)
    return <Navigate to='/login' replace={true} state={{ from: location }} />

  return children
}
