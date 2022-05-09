import React from 'react'
import { Text, View } from 'react-native'
import { Home } from '../home'
import Settings from '../settings'

type Props = {
  navigation: any
}
export default function History({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Histórico</Text>
    </View>
  )
}
