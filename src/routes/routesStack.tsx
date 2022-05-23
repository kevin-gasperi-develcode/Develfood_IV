import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RNBootSplash from 'react-native-bootsplash'
import { SignIn } from '../screens/signIn'
import { Register } from '../screens/register'
import Routes from './routes'

export function RoutesStack() {
  const Stack = createStackNavigator()

  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Routes"
        component={Routes}
      />
    </Stack.Navigator>
  )
}
