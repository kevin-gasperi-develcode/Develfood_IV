import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/theme'
import { AuthProvider } from './src/context/auth'
import { RoutesStack } from './src/routes/routesStack'
import RNBootSplash from 'react-native-bootsplash'

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

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
