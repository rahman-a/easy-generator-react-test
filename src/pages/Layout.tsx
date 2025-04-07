import { Outlet } from 'react-router'
import { AppSidebar } from '@/components/App-Sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { NavUser } from '@/components/Nav-User'

export default function Layout() {
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
