import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, ImagesContainer, ImagesSignIn } from './style'

export function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle={'dark-content'}
        // translucent  <<< para tirar a cor de fundo da barra superior
        backgroundColor={'transparent'}
      />
      <ImagesContainer>
        <Image source={require('../../assets/signIn/cheese_image.png')} />
        <Image source={require('../../assets/signIn/pizza_image.png')} />
      </ImagesContainer>
      <Image
        source={require('../../assets/signIn/develfood_logo.png')}
        style={{ marginTop: -50, position: 'absolute', right: 0 }}
      />
    </Container>
  )
}
