import React from 'react'
import {
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
    <InputRestaurants>
      <ViewSearch>
        <ImageSearch source={require('../../assets/icons/search-icon.png')} />
      </ViewSearch>
      <TextInputMod
        placeholder="Buscar restaurantes"
        onChangeText={textChange}
      />
    </InputRestaurants>
  )
}
