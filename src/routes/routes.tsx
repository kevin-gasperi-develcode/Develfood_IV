import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RNBootSplash from 'react-native-bootsplash'

import { Home } from '../screens/home'
import History from '../screens/history'
import Settings from '../screens/settings'
import Favorites from '../screens/favorites'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Routes() {
  const Tab = createBottomTabNavigator()

  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/Home.png')}
                resizeMode={'contain'}
                style={{
                  tintColor: focused ? 'red' : '#DEDCDC',
                  width: focused ? 27 : 25,
                  height: focused ? 27 : 25,
                }}
              />
              {focused ? null : <Text>Início</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/Favorites.png')}
                resizeMode={'contain'}
                style={{
                  tintColor: focused ? 'red' : '#DEDCDC',
                  width: focused ? 27 : 25,
                  height: focused ? 27 : 25,
                }}
              />
              {focused ? null : <Text>Favoritos</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/History.png')}
                resizeMode={'contain'}
                style={{
                  tintColor: focused ? 'red' : '#DEDCDC',
                  width: focused ? 27 : 25,
                  height: focused ? 27 : 25,
                }}
              />
              {focused ? null : <Text>Histórico</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/Settings.png')}
                resizeMode={'contain'}
                style={{
                  tintColor: focused ? 'red' : '#DEDCDC',
                  width: focused ? 27 : 25,
                  height: focused ? 27 : 25,
                }}
              />
              {focused ? null : <Text>Perfil</Text>}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
