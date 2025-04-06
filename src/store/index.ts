import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools, subscribeWithSelector } from 'zustand/middleware'
import { Store } from '@/types/store'
import { createAuthSlice } from './auth-slice'

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...args) => ({
        ...createAuthSlice(...args),
      }))
    )
  )
)
