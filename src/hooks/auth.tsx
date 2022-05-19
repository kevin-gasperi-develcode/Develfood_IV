import React, { createContext, ReactNode, useContext } from 'react'
import { useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}
interface User {
  id: string
  name: string
  email: string
  Photo?: string
}

interface AuthContextData {
  authState: PropContext
  setAuthState: React.Dispatch<React.SetStateAction<PropContext>>
}
interface PropContext {
  token: string
  type: string
}
const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState({} as PropContext)

  // const user = {
  //   id: '123',
  //   name: 'Kevin',
  //   email: 'kevin@hotmail',
  // }

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
