import React, { createContext, ReactNode, useContext } from 'react'
import { useState } from 'react'
import { usePost } from '../services'

interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextData {
  authState: PropContext
  setAuthState: React.Dispatch<React.SetStateAction<PropContext>>
}
interface PropContext {
  token: string
  type: string
}

interface IAuthContextData {
  loading: boolean
  signIn(email: string, password: string): Promise<void>
  token: string
}
interface RequestProps {
  endpoint: string
  body: {}
  error: {
    title: string
    message: string
  }
}
const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState({} as PropContext)

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}
export { AuthProvider, useAuth }
