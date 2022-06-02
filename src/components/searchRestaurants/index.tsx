import React from 'react'
import { Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler'
import {
  ButtonMod,
  Container,
  ImageSearch,
  InputRestaurants,
  TextInputMod,
} from './styles'

interface InputProps {
  onTouch?: any
}

export function SearchRestaurants({ onTouch }: InputProps) {
  return (
    <Container>
      <InputRestaurants>
        <ButtonMod onPress={onTouch}>
          <ImageSearch source={require('../../assets/icons/search-icon.png')} />
        </ButtonMod>
        <TextInputMod placeholder="Buscar restaurantes" />
      </InputRestaurants>
    </Container>
  )
}
