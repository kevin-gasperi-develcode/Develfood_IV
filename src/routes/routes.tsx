import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RNBootSplash from 'react-native-bootsplash'

import Home from '../screens/home'
import History from '../screens/history'
import Settings from '../screens/settings'
import Favorites from '../screens/favorites'

export default function Routes() {
  const Tab = createBottomTabNavigator()

  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  )
}
