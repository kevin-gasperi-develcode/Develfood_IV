import React from 'react'
import { Home } from '../screens/home'
import Demand from '../screens/demand'
import Settings from '../screens/settings'
import Favorites from '../screens/favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View } from 'react-native'

export default function Routes() {
  const Tab = createBottomTabNavigator()

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../assets/icons/home.png')}
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
                  source={require('../assets/icons/favorites.png')}
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
          name="Pedidos"
          component={Demand}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../assets/icons/history.png')}
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
                  source={require('../assets/icons/settings.png')}
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
    </>
  )
}
