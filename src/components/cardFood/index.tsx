import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {
  AddButton,
  Container,
  Description,
  ImageFood,
  TextButton,
  TextPrice,
  Tittle,
  ViewFood,
} from './styles'

export function CardFood() {
  return (
    <Container>
      <ImageFood source={require('../../assets/images/food-test.png')} />
      <ViewFood>
        <Tittle numberOfLines={1} ellipsizeMode={'tail'}>
          Prato de Camarão e fritasPrato de Camarão e fritasPrato de Camarão e
          fritasPrato de Camarão e fritas
        </Tittle>
        <Description numberOfLines={3} ellipsizeMode={'tail'}>
          Um prato de camarão com fritas que é uma ótima opção para pedir quando
          se está com a família. Um prato de camarão com fritas que é uma ótima
          opção para pedir quando se está com a família.
        </Description>
        <TextPrice>R$ 49,90</TextPrice>
        <AddButton>
          <TextButton>Adicionar</TextButton>
        </AddButton>
      </ViewFood>
    </Container>
  )
}
