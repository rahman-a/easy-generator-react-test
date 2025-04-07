import { useAuthContext } from '@/context/Auth-Provider'
import React from 'react'
import { Navigate, useLocation } from 'react-router'
import { Loader } from './Loader'

export default function NonAuthRoute({
  children,
}: React.ComponentProps<'div'>) {
  const { auth, isAuthChecking } = useAuthContext()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'
  if (isAuthChecking) return <Loader />

  if (auth?.user)
    return <Navigate to={from === '/' ? '/dashboard' : from} replace={true} />

  return children
}
