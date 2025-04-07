import AuthRoute from '@/components/Auth-Route'
import NonAuthRoute from '@/components/Non-Auth-Route'
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
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
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
    element: (
      <NonAuthRoute>
        <Login />
      </NonAuthRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <NonAuthRoute>
        <Signup />
      </NonAuthRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const route = createBrowserRouter(routers)

export default route
