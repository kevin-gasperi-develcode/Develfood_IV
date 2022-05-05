import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
// import api from '../services/api'

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gorest.co.in',
})

export function funcaoGet<T = unknown>(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<T>({} as T)

  useEffect(() => {
    async function fetchData() {
      try {
        await api.get(url, options).then((response) => setData(response.data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return { data }
}
