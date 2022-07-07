import { AxiosRequestConfig, AxiosError } from 'axios'
import React, { useState } from 'react'
import api from '../services/api'

export function usePost<T = unknown, TResponse = unknown>(
   url: string,
   onError: (error: AxiosError<any, any>) => void,
   options?: AxiosRequestConfig | undefined,
   onSuccess?: (response: TResponse) => void,
) {
   const [data, setData] = useState<TResponse>({} as TResponse)
   const [loading, setLoading] = useState(false)

   async function handlerPost(body?: T) {
      try {
         setLoading(true)
         const response = await api.post(url, body, options)
         setData(response.data)
         response.data && onSuccess && onSuccess(response.data)
      } catch (error: AxiosError<any, any> | any) {
         error && onError(error)
         console.log({ error })
      } finally {
         setLoading(false)
      }
   }

   return { data, loading, handlerPost }
}
