import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Title } from './styles'

interface ButtonProps {
   onPressed: Function
   isLoading?: boolean
   title: string
}

export function ButtonStandard({ onPressed, title, isLoading }: ButtonProps) {
   const theme = useTheme()

   return (
      <Container onPress={() => onPressed({})}>
         {isLoading ? (
            <ActivityIndicator color={theme.colors.text_white} size={25} />
         ) : (
            <Title>{title}</Title>
         )}
      </Container>
   )
}
