import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { Home } from '../screens/home'
import Demand from '../screens/demand'
import Settings from '../screens/settings'
import Favorites from '../screens/favorites'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View } from 'react-native'

export default function Routes() {
  const Stack = createStackNavigator()
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

{
  /* <Stack.Navigator>
<Stack.Screen
  name="SignIn"
  component={SignIn}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Início"
  component={Home}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Favoritos"
  component={Favorites}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Pedidos"
  component={Demand}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Perfil"
  component={Settings}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Register"
  component={Register}
  options={{ headerShown: false }}
/>
</Stack.Navigator>
)
} */
}
