import React from 'react'
import { Image } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Title } from './styles'

interface Props {
  name: string
  isPressed: boolean
  onPressed: Function
}

export function Button({ name, isPressed, onPressed }: Props) {
  const theme = useTheme()
  console.log({ name })

  console.log({ isPressed })
  return (
    <Container onPress={() => onPressed()}>
      <Image
        source={
          name === 'Início'
            ? theme.icons.home
            : name === 'Favoritos'
            ? theme.icons.favorite
            : name === 'Histórico'
            ? theme.icons.history
            : name === 'Perfil'
            ? theme.icons.settings
            : null
        }
        style={{
          tintColor: isPressed ? theme.colors.icon_red : theme.colors.icon_gray,
        }}
      />
      {isPressed ? <Title /> : <Title>{name}</Title>}
    </Container>
  )
}
