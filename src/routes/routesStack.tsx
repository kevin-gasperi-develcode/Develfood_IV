import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RNBootSplash from 'react-native-bootsplash'
import { SignIn } from '../screens/signIn'
import { Register } from '../screens/registerFolders/register'
import { Register2 } from '../screens/registerFolders/register2'
import { Register3 } from '../screens/registerFolders/register3'
import Routes from './routes'
import { RegisterSucess } from '../screens/registerFolders/registerSucess'

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
        name="Register2"
        component={Register2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register3"
        component={Register3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterSucess"
        component={RegisterSucess}
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
