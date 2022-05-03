import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

export function funcaoPost<T = unknown, TResponse = unknown>(
  url: string,
  body: T,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<TResponse>({} as TResponse)

  async function handlerPost() {
    try {
      const response = await api.post(url, body, options)
      setData(response.data)
      console.log({ data })
    } catch (error) {
      console.log(error)
    }
  }

  return { data, handlerPost }
}
