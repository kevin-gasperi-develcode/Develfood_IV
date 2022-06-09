import React from 'react'
import { Text } from 'react-native'
import { HeaderStandard } from '../../components/headerStandard'
import { RestaurantInfo } from '../../components/restaurantInfo'
import theme from '../../global/theme'
import { Container } from './styles'

export function RestaurantProfile({ route }: any) {
  const { id, name } = route.params
  return (
    <>
      <Container>
        <HeaderStandard
          goBackButton={theme.icons.back_button}
          imageRight={theme.icons.favorite_white}
          title={'Restaurantes'}
        />
        <RestaurantInfo nameRestaurant={name} idRestaurant={id} />
      </Container>
    </>
  )
}
