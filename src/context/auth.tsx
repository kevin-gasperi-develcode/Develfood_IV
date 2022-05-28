import React, { createContext, ReactNode, useContext } from 'react'
import { useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextData {
  authState: PropContext
  setAuthState: React.Dispatch<React.SetStateAction<PropContext>>
  signUp: any
}
interface PropContext {
  token: string
  type: string
}
interface SignUpProps {
  email: string
  password: string
  firstName: string
  lastName: string
  cpf: string
  phone: string
  photo: string
  street: string
  number: string
  neighborhood: string
  city: string
  zipcode: string
  state: string
  nickname: string
}
interface IAuthContextData {
  loading: boolean
  signIn(email: string, password: string): Promise<void>

  signUp({
    email,
    password,
    firstName,
    lastName,
    cpf,
    phone,
    photo,
    street,
    number,
    neighborhood,
    city,
    zipcode,
    state,
    nickname,
  }: SignUpProps): void
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
  const [loading, setLoading] = useState(false)
  const [authState, setAuthState] = useState({} as PropContext)
  const [request, setRequest] = useState({} as RequestProps)

  async function signUp({
    email,
    password,
    firstName,
    lastName,
    cpf,
    phone,
    photo,
    street,
    number,
    neighborhood,
    city,
    zipcode,
    state,
    nickname,
  }: SignUpProps) {
    const signUpData = {
      email,
      password,
      creationDate: new Date(),
      role: {
        id: 2,
      },
      costumer: {
        firstName,
        lastName,
        cpf,
        phone,
        photo,
        address: [
          {
            street,
            number,
            neighborhood,
            city,
            zipCode: zipcode,
            state,
            nickname,
          },
        ],
      },
    }
    console.log(signUpData.costumer.address)

    setRequest({
      endpoint: '/user',
      body: signUpData,
      error: { title: 'Erro de cadastro', message: 'Dados inválidos' },
    })
  }

  return (
    <AuthContext.Provider value={{ authState, setAuthState, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}
export { AuthProvider, useAuth }
