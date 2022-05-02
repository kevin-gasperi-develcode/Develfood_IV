import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import api from '../../services/api'
import { useGet } from '../../services/get'
import { pegarRepositoriosDoUsuario } from '../../services/requisicoes'

interface User {
  id: string
  name: string
  email: string
}

export const Home: React.FC<undefined> = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('/public/v2/users').then((response) => {
      setUsers(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      {users.map((user) => (
        <Text>
          `user ${user.id}, nome ${user.name}, email: ${user.email}`
        </Text>
      ))}
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
