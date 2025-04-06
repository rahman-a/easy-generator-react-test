import { Navigate, Outlet, useLocation, useNavigate } from 'react-router'
import { AppSidebar } from '@/components/App-Sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { NavUser } from '@/components/Nav-User'
import { useAuthContext } from '@/context/Auth-Provider'
import { useEffect } from 'react'

export default function Layout() {
  const { auth } = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (auth?.user) {
      navigate(`${location.pathname}${location.search}`, { replace: true })
    }
  }, [auth?.user, location.pathname, location.search, navigate])

  if (!auth?.user) return <Navigate to='/login' replace state={location} />
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger className='-ml-1' />
          <div className='ml-auto px-3'>
            <NavUser
              user={{ email: 'ahm@gmail.com', name: 'Ahmed Abdelrahman' }}
            />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
