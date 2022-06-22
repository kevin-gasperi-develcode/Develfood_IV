import React, { createContext, ReactNode, useContext } from 'react'
import { useState } from 'react'
interface AuthProviderProps {
  children: ReactNode
}

interface CartData {}

interface AuthProviderProps {}

const Cart = createContext({} as CartData)

function AuthProvider({ children }: AuthProviderProps) {
  return <CartProvider.Provider value={{}}>{children}</CartProvider.Provider>
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}
export { AuthProvider, useAuth }
