import React, { MutableRefObject, useEffect, useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'
import { funcaoGet } from '../../services/get'
import { funcaoPost } from '../../services/post'
import {funcaoDelete} from '../../services/delete'
import {funcaoPut} from '../../services/put'

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
  const { data } = funcaoGet<Data[]>('/public/v2/users') //get

  const { data: dataPost, handlerPost } = funcaoPost(
    '/public/v2/users',
    {
      name: 'Kevin',
      email: 'kevin@develcode2005.com',
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

  const { data: dataPut, handlerPut} = funcaoPut<Data, DataPost> ('/public/v2/users/7452', {
    name: 'Kevin V',
    email: 'kevin@develcode20.com',
    gender: 'male',
    status: 'active',
  },{
    headers: {
      'Content-type': 'application/json',
      Authorization:
        'Bearer 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4',
    },
  },)

  const { data: dataDelete, handlerDelete} = funcaoDelete ('/public/v2/users/7301' , { headers: {
    'Content-type': 'application/json',
    Authorization:
      'Bearer 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4',
  },
  })

  // const dadosPost = data.map((user) => {
  //   <Text>
  //     `user: nome ${user.name}, email: ${user.email}`
  //   </Text>
  // ))

  

  return (
    <>
      <Button title={'post'} onPress={() => handlerPost()} />
      <Button title={'put'} onPress={() => handlerPut()} />
      <Button title={'delete'} onPress={() => handlerDelete()} />
      { <FlatList
        data={data }
        renderItem={({ item }) => (
          <>
            <Text> Nome: {item.name} </Text>
            <Text> Email: {item.email}</Text>
            <Text> Gender: {item.gender}</Text>
            <Text> Status: {item.status}</Text>
            <Text>_________________________</Text>        
            </>
            )
          }
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

// export const Home: React.FC<undefined> = () => {
//   const [users, setUsers] = useState<User[]>([])

//   useEffect(() => {
//     api.get('/public/v2/users').then((response) => {
//       setUsers(response.data)
//       console.log(response.data)
//     })
//   }, [])

//   return (
//     <>
//       {users.map((user) => (
//         <Text>
//           `user ${user.id}, nome ${user.name}, email: ${user.email}`
//         </Text>
//       ))}
//     </>
//   )
// }

// import { NavigationContainer } from '@react-navigation/native'
// import React, { useState } from 'react'
// import { Text, TouchableOpacity, View } from 'react-native'
// import api from '../../services/api'

// export default function Home() {
//   const [dados, setDados] = useState([])

//   React.useEffect(() => {
//     api
//       .get('/public/v2/users')
//       .then((response) => {
//         setDados(response.data)
//         console.log(dados)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])
//   return (
//     <TouchableOpacity onPress={() => {}}>
//       <Text>a</Text>
//     </TouchableOpacity>
//   )
// }
