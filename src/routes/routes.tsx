import React from 'react';
import { Home } from '../screens/home';
import Demand from '../screens/demand';
import Settings from '../screens/settings';
import Favorites from '../screens/favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../global/theme';
import { TabBarComponent } from '../components/tabBarComponent';

export default function Routes() {
   const Tab = createBottomTabNavigator();

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
               name="Home"
               component={Home}
               options={{
                  tabBarIcon: ({ focused }) => (
                     <TabBarComponent
                        focusedItem={focused}
                        tabIcon={theme.icons.home}
                        iconName={'Início'}
                     />
                  ),
               }}
            />
            <Tab.Screen
               name="Favoritos"
               component={Favorites}
               options={{
                  tabBarIcon: ({ focused }) => (
                     <TabBarComponent
                        focusedItem={focused}
                        tabIcon={theme.icons.favorite}
                        iconName={'Favoritos'}
                     />
                  ),
               }}
            />
            <Tab.Screen
               name="Demand"
               component={Demand}
               options={{
                  tabBarIcon: ({ focused }) => (
                     <TabBarComponent
                        focusedItem={focused}
                        tabIcon={theme.icons.demand}
                        iconName={'Pedidos'}
                     />
                  ),
               }}
            />
            <Tab.Screen
               name="Settings"
               component={Settings}
               options={{
                  tabBarIcon: ({ focused }) => (
                     <TabBarComponent
                        focusedItem={focused}
                        tabIcon={theme.icons.settings}
                        iconName={'Perfil'}
                     />
                  ),
               }}
            />
         </Tab.Navigator>
      </>
   );
}
