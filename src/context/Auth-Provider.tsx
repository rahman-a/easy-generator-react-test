/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useContext,
  useState,
} from 'react'

type AuthContextProps = {
  token: string | undefined
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>
}

const intitalState: AuthContextProps = {
  token: undefined,
  setToken: () => undefined,
}

const AuthContext = createContext<AuthContextProps>(intitalState)

const AuthProvider = ({ children }: React.ComponentProps<'div'>) => {
  const [token, setToken] = useState<string>()
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error('useAuthContext must be used within a AuthProvider')

  return context
}

export { useAuthContext }

export default AuthProvider
