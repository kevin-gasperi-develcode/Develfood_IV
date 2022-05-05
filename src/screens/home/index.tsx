import React, { MutableRefObject, useEffect, useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'
import { funcaoDelete, funcaoGet, funcaoPost, funcaoPut } from '../../services'

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
  const { data } = funcaoGet<Data[]>('/public/v2/users')

  const { data: dataPost, handlerPost } = funcaoPost(
    '/public/v2/users',
    {
      name: 'Kevin',
      email: 'kevin@develcode2015.com',
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

  const { data: dataPut, handlerPut } = funcaoPut<Data, DataPost>(
    '/public/v2/users/4907',
    {
      name: 'Kevin V',
      email: 'kevin@develcode2017.com',
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

  const { data: dataDelete, handlerDelete } = funcaoDelete(
    '/public/v2/users/4907',
    {
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4',
      },
    },
  )

  return (
    <>
      <Button title={'post'} onPress={() => handlerPost()} />
      <Button title={'put'} onPress={() => handlerPut()} />
      <Button title={'delete'} onPress={() => handlerDelete()} />
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
    </>
  )
}
