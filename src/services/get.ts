import { AxiosRequestConfig } from 'axios'
import React, { useEffect, useState } from 'react'
import api from './api'

export function useGet(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        await api.get(url, options).then((response) => setData(response.data))
      } catch (erro) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export const usePut = async (
  url: string,
  data?: AxiosRequestConfig,
  options?: AxiosRequestConfig,
) => {
  try {
    const response = await api.put(url, data, options)
    console.log(response.data)
    return { response }
  } catch (error) {
    console.log(Error, error)
  }
}

export const useDelete = async (url: string, options: AxiosRequestConfig) => {
  try {
    const response = await api.delete(url, options)
    console.log(response.data)
    return { response }
  } catch (error) {
    console.log(Error, error)
  }
}
