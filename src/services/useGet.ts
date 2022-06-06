import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import api from './api'

export function useGet<T = unknown>(
  url: string,
  options?: AxiosRequestConfig,
  onSuccess?: (response: T) => void,
) {
  const [data, setData] = useState<T>({} as T)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)

    async function fetchData() {
      setLoading(true)
      try {
        await api.get(url, options).then((response) => {
          setData(response.data)
          onSuccess && onSuccess(response.data)
        })
      } catch (error) {
        console.log(error)
        setError(error)
      }
      setLoading(false)
    }

  return { data, loading, error, fetchData  }
}
