import { SliceStateCreator } from '@/interfaces/store.interface'

type State = {
  session: {
    user?: {
      _id: string
      email: string
      name: string
    }
  } | null
}

type Actions = {
  setSession: (session: State['session']) => void
}

export type AuthSlice = State & Actions

export const createAuthSlice: SliceStateCreator<AuthSlice> = (set) => ({
  session: null,
  setSession: (session) =>
    set((state) => {
      state.session = session
    }),
})
