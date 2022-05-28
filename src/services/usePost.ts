import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

export function usePost<T = unknown, TResponse = unknown>(
  url: string,
  body: T,
  options?: AxiosRequestConfig,
  onSuccess?: (response: TResponse) => void,
  onError?: Function,
) {
  const [data, setData] = useState<TResponse>({} as TResponse)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)

  async function handlerPost() {
    setLoading(true)
    try {
      const response = await api.post<TResponse>(url, body, options)
      setData(response.data)
      onSuccess && onSuccess(response.data)
    } catch (error) {
      setError(error)
      onError && onError(error)
    }
    setLoading(false)
  }

  return { data, handlerPost, loading, error }
}
