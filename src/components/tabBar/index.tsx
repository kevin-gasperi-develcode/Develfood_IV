import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button } from '../tabButton'
import { Container } from './styles'

export function TabBar() {
  const navigation = useNavigation()
  const [iconName, setIconName] = useState(' ')
  return (
    <Container>
      <Button
        name="Início"
        onPressed={() => {
          navigation.navigate('Início' as never)
          setIconName('Início')
        }}
        isPressed={iconName === 'Início'}
      />
      <Button
        name="Favoritos"
        onPressed={() => {
          navigation.navigate('Favoritos' as never)
          setIconName('Favoritos')
        }}
        isPressed={iconName === 'Favoritos'}
      />
      <Button
        name="Histórico"
        onPressed={() => {
          navigation.navigate('Histórico' as never)
          setIconName('Histórico')
        }}
        isPressed={iconName === 'Histórico'}
      />
      <Button
        name="Perfil"
        onPressed={() => {
          navigation.navigate('Perfil' as never)
          setIconName('Perfil')
        }}
        isPressed={iconName === 'Perfil'}
      />
    </Container>
  )
}
