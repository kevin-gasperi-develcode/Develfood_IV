import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Container, ImageGoBack, TextContainer, TextTitle } from './styles'
import { useNavigation } from '@react-navigation/native'
import theme from '../../global/theme'

export function HeaderAddress() {
  const mapLogo = require('../../assets/icons/map-logo.png')

  return (
    <Container>
      <ImageGoBack source={mapLogo} />

      <TextContainer>
        <TextTitle>rua Arcy da Nobrega 667, Panazollo</TextTitle>
      </TextContainer>
    </Container>
  )
}
