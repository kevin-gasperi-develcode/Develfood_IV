import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/theme'
import { AuthProvider } from './src/context/auth'
import { RoutesStack } from './src/routes/routesStack'
import { SignIn } from './src/screens/signIn'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <RoutesStack />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  )
}
