import React from 'react'
import { Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler'
import {
  Container,
  ImageSearch,
  InputRestaurants,
  TextInputMod,
  ViewSearch,
} from './styles'

export function SearchRestaurants() {
  return (
    <Container>
      <InputRestaurants>
        <ViewSearch>
          <ImageSearch source={require('../../assets/icons/search-icon.png')} />
        </ViewSearch>
        <TextInputMod placeholder="Buscar restaurantes" />
      </InputRestaurants>
    </Container>
  )
}
