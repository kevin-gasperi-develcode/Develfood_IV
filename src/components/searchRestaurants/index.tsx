import React from 'react'
import theme from '../../global/theme'
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
        <ImageSearch source={theme.icons.serch_icon} resizeMode={'contain'} />
      </ViewSearch>
      <TextInputMod
        placeholder="Buscar restaurantes"
        onChangeText={textChange}
      />
    </InputRestaurants>
  )
}
