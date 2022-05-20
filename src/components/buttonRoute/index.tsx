import React from 'react'
import { Image, Text, View } from 'react-native'
import { Container, ImageButton } from './styles'

interface ButtonProps {
  sourcePhoto: any
  focused: boolean
}

export function ButtonRoute({ sourcePhoto, focused }: ButtonProps) {
  return (
    <Container>
      <ImageButton source={sourcePhoto} resizeMode={'contain'} />
      {focused ? null : <Text>Início</Text>}
      ),
    </Container>
  )
}
