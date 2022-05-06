import React from 'react'
import { Text, View } from 'react-native'
import { RoutesButton } from '../../components/button/barraDeNavegacao'
import { Home } from '../home'

type Props = {
  navigation: any
}
export default function History({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Histórico</Text>
      <RoutesButton
        title="Home"
        icon
        onPress={() => {
          navigation.navigate(Home)
        }}
      />
    </View>
  )
}
