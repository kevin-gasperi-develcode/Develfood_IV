import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

interface Data {
  name: string
  email: string
  gender: string
  status: string
}

export function funcaoPost<Data>(
  url: string,
  body: Data,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<Data>({} as Data)

  async function handlerPost() {
    try {
      const response = await api.post(url, body, options)
      setData(response.data)
      console.log( response.data )
    } catch (error) {
      console.log(error)
    }
  }

  return { data, handlerPost }
}
