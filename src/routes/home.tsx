import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/home'
import History from '../screens/history'
import Settings from '../screens/settings'
import Favorites from '../screens/favorites'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export function home() {
  return (
    <View>
      <TouchableOpacity onPress={}>Início</TouchableOpacity>
    </View>
  )
}

// <Tab.Screen
//   name="Início"
//   component={Home}
//   options={{
//     tabBarIcon: ({ focused }) => (
//       <View style={{ alignItems: 'center' }}>
//         <Image
//           source={require('../../assets/icons/Home.png')}
//           resizeMode={'contain'}
//           style={{
//             tintColor: focused ? 'red' : '#DEDCDC',
//             width: focused ? 27 : 25,
//             height: focused ? 27 : 25,
//           }}
//         />
//         {focused ? null : <Text>Início</Text>}
//       </View>
//     ),
//   }}
// />
