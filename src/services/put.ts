import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

export function funcaoPut<T = unknown, TResponse = unknown>(
  url: string,
  body: T,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<TResponse>({} as TResponse)

  async function handlerPut() {
    try {
      const response = await api.put(url, body, options)
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return { data, handlerPut }
}
