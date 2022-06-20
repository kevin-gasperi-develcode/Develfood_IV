import React from 'react'
import { Text } from 'react-native'
import theme from '../../global/theme'
import {
  ImageSearch,
  InputRestaurants,
  TextInputMod,
  ViewSearch,
} from './styles'

interface InputProps {
  textChange: ((text: string) => void) | undefined
  nameRestaurant: string
}

export function SearchFood({ textChange, nameRestaurant }: InputProps) {
  return (
    <InputRestaurants>
      <ViewSearch>
        <ImageSearch source={theme.icons.serch_icon} resizeMode={'contain'} />
      </ViewSearch>
      <TextInputMod
        onChangeText={textChange}
        placeholder={`Buscar em ${nameRestaurant}`}
      />
    </InputRestaurants>
  )
}
