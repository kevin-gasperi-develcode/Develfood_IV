import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, StatusBar, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ButtonLogin,
  Container,
  ImagesContainer,
  InputTextLogin,
  ViewInput,
} from './style'

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
        <Image
          source={require('../../assets/signIn/pizza_image.png')}
          style={{ height: 300 }}
        />
      </ImagesContainer>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/signIn/develfood_logo.png')}
          style={{ marginTop: -60 }}
        />
      </View>
      <ViewInput>
        <InputTextLogin placeholder="exemplo@email.com" />
        <InputTextLogin
          placeholder="*****************"
          secureTextEntry={true}
          style={{ marginTop: 10 }}
        />
        <Text style={{ marginTop: 10 }}>Esqueci minha senha</Text>

        <ButtonLogin>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              lineHeight: 16.41,
            }}
          >
            Entrar
          </Text>
        </ButtonLogin>
        <Text style={{ fontSize: 12, marginTop: 10 }}>
          Não possui cadastro? Cadastre-se Aqui!`
        </Text>
      </ViewInput>

      <Image
        source={require('../../assets/signIn/backgroundSignIn.png')}
        style={{ marginTop: -20 }}
      />
    </Container>
  )
}
