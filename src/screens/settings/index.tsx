import React from 'react'
import { Text, View } from 'react-native'
import { TabBar } from '../../components/tabBar'
import { useAuth } from '../../hooks/auth'

export default function Settings() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Configurações</Text>
      </View>
      <TabBar />
    </>
  )
}
