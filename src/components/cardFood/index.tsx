import React from 'react'
import theme from '../../global/theme'
import {
  AddButton,
  Container,
  Description,
  ImageFood,
  TextButton,
  TextPrice,
  Tittle,
  ViewFood,
  Wrapper,
} from './styles'

interface RestaurantFood {
  description?: string
  foodType?: any
  id?: number
  photo_url?: string
  price?: number
  restaurantName?: string
}
export function CardFood({
  description,
  price,
  id,
  photo_url,
}: RestaurantFood) {
  return (
    <Container>
      {photo_url ? (
        <ImageFood source={{ uri: photo_url }} />
      ) : (
        <ImageFood source={theme.icons.restaurant_without_img} />
      )}
      <ViewFood>
        <Tittle numberOfLines={1} ellipsizeMode={'tail'}>
          {description}
        </Tittle>
        <Description numberOfLines={3} ellipsizeMode={'tail'}>
          Um prato de camarão com fritas que é uma ótima opção para pedir quando
          se está com a família. Um prato de camarão com fritas que é uma ótima
          opção para pedir quando se está com a família.
        </Description>
        <Wrapper>
          <TextPrice>R$ {price}</TextPrice>
          <AddButton>
            <TextButton>Adicionar</TextButton>
          </AddButton>
        </Wrapper>
      </ViewFood>
    </Container>
  )
}
