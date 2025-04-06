import { StateCreator } from 'zustand'
import { AuthSlice } from '@/store/auth-slice'
export type Store = AuthSlice

export type SliceStateCreator<T> = StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  T
>
