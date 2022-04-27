import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/home'
import History from '../screens/history'
import Settings from '../screens/settings'
import Favorites from '../screens/favorites'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  )
}
