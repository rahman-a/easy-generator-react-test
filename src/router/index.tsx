import Dashboard from '@/pages/Dashboard'
import Error from '@/pages/Error'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import NotFound from '@/pages/Not-Found'
import Profile from '@/pages/Profile'
import Signup from '@/pages/Signup'
import { createBrowserRouter, RouteObject } from 'react-router'

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const route = createBrowserRouter(routers)

export default route
