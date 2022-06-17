import React from 'react'
import { Home } from '../screens/home'
import Demand from '../screens/demand'
import Settings from '../screens/settings'
import Favorites from '../screens/favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View } from 'react-native'
import theme from '../global/theme'

export default function Routes() {
  const Tab = createBottomTabNavigator()

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ width: 75, alignItems: 'center' }}>
                <Image
                  source={require('../assets/icons/home_tab_icon.png')}
                  resizeMode={'contain'}
                  style={{
                    tintColor: focused
                      ? theme.colors.background_red
                      : '#DEDCDC',
                    height: focused ? 25 : 23,
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
              <View style={{ width: 75, alignItems: 'center' }}>
                <Image
                  source={require('../assets/icons/favorite_tab_icon.png')}
                  resizeMode={'contain'}
                  style={{
                    tintColor: focused
                      ? theme.colors.background_red
                      : '#DEDCDC',
                    height: focused ? 25 : 23,
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
              <View style={{ width: 75, alignItems: 'center' }}>
                <Image
                  source={require('../assets/icons/demand_tab_icon.png')}
                  resizeMode={'contain'}
                  style={{
                    tintColor: focused
                      ? theme.colors.background_red
                      : '#DEDCDC',
                    height: focused ? 25 : 23,
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
              <View style={{ width: 75, alignItems: 'center' }}>
                <Image
                  source={require('../assets/icons/settings_tab_icon.png')}
                  resizeMode={'contain'}
                  style={{
                    tintColor: focused
                      ? theme.colors.background_red
                      : '#DEDCDC',
                    height: focused ? 25 : 23,
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
