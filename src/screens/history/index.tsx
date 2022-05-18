import React from 'react'
import { Text, View } from 'react-native'
import { TabBar } from '../../components/tabBar'

export default function History() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Histórico</Text>
      </View>
      <TabBar />
    </>
  )
}
