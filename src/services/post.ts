import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

interface Data {
  name: string
  email: string
  gender: string
  status: string
}

export function usePost<Data>(
  url: string,
  body: Data,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<Data>({} as Data)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)

  async function handlerPost() {
    setLoading(true)
    try {
      const response = await api.post(url, body, options)
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
      setError(error)
    }
    setLoading(false)
  }

  return { data, handlerPost, loading, error }
}
