import { CurrentRenderContext } from '@react-navigation/native'
import React, { MutableRefObject, useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { useDelete, useGet, usePost, usePut } from '../../services/index'

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
  const { data, loading, error } = useGet<Data[]>('/public/v2/users')

  const {
    data: dataPost,
    handlerPost,
    loading: loadingsPost,
    error: errorPost,
  } = usePost(
    '/public/v2/users',
    {
      name: 'Kevin',
      email: 'kevin@develcode2025.com',
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
      {loading || loadingsPost || loadingPut || loadingDelete ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 30 }}>Carregando...</Text>
        </View>
      ) : (
        <>
          {
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <>
                  <Text> Nome: {item.name} </Text>
                  <Text> Email: {item.email}</Text>
                  <Text> Gender: {item.gender}</Text>
                  <Text> Status: {item.status}</Text>
                  <Text>_________________________</Text>
                </>
              )}
            />
          }
          <View>
            <Text>{dataPost.name}</Text>
            <Text>{dataPost.email}</Text>
            <Text>{dataPost.gender}</Text>
            <Text>{dataPost.status}</Text>
          </View>

          <Button title={'post'} onPress={() => handlerPost()} />
          <Button title={'put'} onPress={() => handlerPut()} />
          <Button title={'delete'} onPress={() => handlerDelete()} />
        </>
      )}
    </>
  )
}
