import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from '../button'
import { Container } from './styles'

export function TabBar() {
  const navigation = useNavigation()
  const [iconName, setIconName] = useState(' ')
  return (
    <Container>
      <Button
        name="Início"
        onPressed={() => {
          setIconName('Início')
          navigation.navigate('Início' as never)
        }}
        isPressed={iconName === 'Início'}
      />
      <Button
        name="Favoritos"
        onPressed={() => {
          setIconName('Favoritos')
          navigation.navigate('Favoritos' as never)
        }}
        isPressed={iconName === 'Favoritos'}
      />
      <Button
        name="Histórico"
        onPressed={() => {
          setIconName('Histórico')
          navigation.navigate('Histórico' as never)
        }}
        isPressed={iconName === 'Histórico'}
      />
      <Button
        name="Perfil"
        onPressed={() => {
          setIconName('Perfil')
          navigation.navigate('Perfil' as never)
        }}
        isPressed={iconName === 'Perfil'}
      />
    </Container>
  )
}
