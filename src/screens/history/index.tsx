import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../../components/button'
import { Home } from '../home'
import Settings from '../settings'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SignIn } from '../signIn'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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
