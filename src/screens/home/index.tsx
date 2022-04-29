import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import api from '../../services/api'

export default function Home() {
  const [dados, setDados] = useState([])

  React.useEffect(() => {
    api.get('/public/v2/users').then((response) => {
      setDados(response.data)
      console.log(dados)
    })
  }, [])
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text>a</Text>
    </TouchableOpacity>
  )
}
