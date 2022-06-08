import React from 'react'
import {
  Container,
  ImageSearch,
  InputRestaurants,
  TextInputMod,
  ViewSearch,
} from './styles'

interface InputProps {
  textChange: ((text: string) => void) | undefined
}

export function SearchRestaurants({ textChange }: InputProps) {
  return (
    <Container>
      <InputRestaurants>
        <ViewSearch>
          <ImageSearch source={require('../../assets/icons/search-icon.png')} />
        </ViewSearch>
        <TextInputMod
          placeholder="Buscar restaurantes"
          onChangeText={textChange}
        />
      </InputRestaurants>
    </Container>
  )
}
