import React, { MutableRefObject, useEffect, useState } from 'react'
import { Button, FlatList, Text, TextInput } from 'react-native'
// import api from '../../services/api'
// import { useGet } from '../../services/get'
import { funcaoGet } from '../../services/get'
import { funcaoPost } from '../../services/post'

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

  const { data: dataPost, handlerPost } = funcaoPost<Data, DataPost>(
    '/public/v2/users',
    {
      name: 'Kevin',
      email: 'kevin@emaissl',
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

  return (
    <>
      <Button title={'botao'} onPress={() => handlerPost()} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <Text>Email:{item.email}</Text>
          </>
        )}
      />
      {/* {users.map((user) => (
        <Text>
          `user ${user.id}, nome ${user.name}, email: ${user.email}`
        </Text>
      ))} */}
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
