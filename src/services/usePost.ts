// import { AxiosError, AxiosRequestConfig } from 'axios'
// import { useState } from 'react'
// import api from './api'

// export function usePost<T = unknown, TResponse = unknown>(
//   url: string,
//   body?: T,
//   options?: AxiosRequestConfig,
//   // onSuccess?: (response: TResponse) => void,
//   // onError?: Function,
// ) {
//   const [data, setData] = useState<TResponse>({} as TResponse)
//   const [loading, setLoading] = useState<boolean>(false)
//   // const [error, setError] = useState<Error | unknown | null>(null)

//   async function handlerPost(
//     onError: (error: AxiosError<any, any>) => void,
//     onSuccess?: (response: TResponse) => void,
//   ) {
//     try {
//       setLoading(true)
//       const response = await api.post(url, body, options)
//       setData(response.data)
//       // onSuccess && onSuccess(response.data)
//       response.data && onSuccess && onSuccess(response.data)
//     } catch (error: AxiosError<any, any> | any) {
//       // setError(error)
//       error && onError(error)
//       // onError && onError(error)
//     }
//     setLoading(false)
//   }

//   return { data, handlerPost, loading }
// }

import { AxiosRequestConfig, AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import api from '../services/api'

export function usePost<T = unknown, TResponse = unknown>(
  url: string,
  onError: (error: AxiosError<any, any>) => void,
  body?: T,
  options?: AxiosRequestConfig,
  onSuccess?: (response: TResponse) => void,
) {
  const [data, setData] = useState<TResponse>({} as TResponse)
  const [loading, setLoading] = useState(false)

  async function handlerPost() {
    console.log('seta--->', url, body)
    try {
      setLoading(true)
      const response = await api.post(url, body, options)
      setData(response.data)
      console.log(response.data)
      response.data && onSuccess && onSuccess(response.data)
    } catch (error: AxiosError<any, any> | any) {
      error && onError(error)
      console.log(error.response.data)
    } finally {
      setLoading(false)
      console.log('POST---->', body)
    }
  }

  return { data, loading, handlerPost }
}
