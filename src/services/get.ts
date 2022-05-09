import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import api from '../services/api'

export function useGet<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T>({} as T)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        await api.get(url, options).then((response) => setData(response.data))
      } catch (error) {
        console.log(error)
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return { data, loading, error }
}
