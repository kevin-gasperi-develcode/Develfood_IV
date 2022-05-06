import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

export function useDelete<T = unknown, TResponse = unknown>(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<TResponse>({} as TResponse)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)

  async function handlerDelete() {
    setLoading(true)
    try {
      const response = await api.delete(url, options)
      setData(response.data)
      console.log(data)
    } catch (error) {
      console.log(error)
      setError(error)
    }
    setLoading(false)
  }

  return { data, handlerDelete, loading, error }
}
