import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/theme'
import { AuthProvider } from './src/hooks/auth'
import { RoutesStack } from './src/routes/routesStack'

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
