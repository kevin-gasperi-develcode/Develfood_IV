import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

export function funcaoDelete<T = unknown, TResponse = unknown>(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<TResponse>({} as TResponse)

  async function handlerDelete() {
    try {
      const response = await api.delete(url, options)
      setData(response.data)
      console.log( data )
    } catch (error) {
      console.log(error)
    }
  }

  return { data, handlerDelete }
}
