import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { useDelete, useGet, usePut } from '../../services/index'
interface Data {
  name: string
  email: string
  gender: string
  status: string
}
interface DataPost {
  name: string
  email: string
  gender: string
  status: string
}
export function Home() {
  function handlerGet() {
    const { data, loading, error } = useGet<Data[]>('/user', undefined)
    console.log(data)
  }

  const {
    data: dataPut,
    handlerPut,
    loading: loadingPut,
    error: errorPut,
  } = usePut<Data, DataPost>(
    '/public/v2/users/5752',
    {
      name: 'Kevin V',
      email: 'kevin@develcode2026.com',
      gender: 'male',
      status: 'active',
    },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4',
      },
    },
  )

  const {
    data: dataDelete,
    handlerDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = useDelete('/public/v2/users/5758', {
    headers: {
      'Content-type': 'application/json',
      Authorization:
        'Bearer 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4',
    },
  })

  return (
    <>
      <Button title={'get'} onPress={() => handlerGet()} />
      <Button title={'put'} onPress={() => handlerPut()} />
      <Button title={'delete'} onPress={() => handlerDelete()} />
    </>
  )
}
