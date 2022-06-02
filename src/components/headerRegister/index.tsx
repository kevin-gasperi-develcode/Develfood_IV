import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { BackButton, Container, TextTitle } from './styles'
import { useNavigation } from '@react-navigation/native'

export function HeaderRegister() {
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icons/left-side-1.png')} />
      </BackButton>
      <TextTitle>
        <Text style={{ fontSize: 16, lineHeight: 16.41, color: '#2B2B2E' }}>
          Cadastro
        </Text>
      </TextTitle>
    </Container>
  )
}
