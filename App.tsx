import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/theme'
import { SignIn } from './src/screens/signIn'
import { AuthProvider } from './src/hooks/auth'
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  )
}
