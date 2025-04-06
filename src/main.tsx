import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'
import './index.css'
import router from './router/index.tsx'
import AuthProvider from './context/Auth-Provider.tsx'
import { queryClientConfig } from './lib/query-client.ts'

const queryClient = new QueryClient(queryClientConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster richColors closeButton position='top-center' />
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
