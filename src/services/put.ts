import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

export function usePut<T = unknown, TResponse = unknown>(
  url: string,
  body: T,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<TResponse>({} as TResponse)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)

  async function handlerPut() {
    setLoading(true)
    try {
      const response = await api.put(url, body, options)
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
      setError(error)
    }
    setLoading(false)
  }

  return { data, handlerPut, loading, error }
}
