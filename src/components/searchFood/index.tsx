import React from 'react'
import { Text } from 'react-native'
import theme from '../../global/theme'
import {
  Container,
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
        <ImageSearch source={require('../../assets/icons/search-icon.png')} />
      </ViewSearch>
      <TextInputMod
        onChangeText={textChange}
        placeholder={`Buscar em ${nameRestaurant}`}
      />
    </InputRestaurants>
  )
}
