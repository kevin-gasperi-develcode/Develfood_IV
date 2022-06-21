import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '../screens/signIn'
import { Register } from '../screens/registerFolders/register'
import { Register2 } from '../screens/registerFolders/register2'
import { Register3 } from '../screens/registerFolders/register3'
import Routes from './routes'
import { RegisterSucess } from '../screens/registerFolders/registerSucess'
import { RestaurantProfile } from '../screens/restaurantProfile'
import { Home } from '../screens/home'

export function RoutesStack() {
  const Stack = createStackNavigator()

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
        name="Routes"
        component={Routes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RestaurantProfile"
        component={RestaurantProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
