import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CardFood } from '../../components/cardFood'
import { HeaderStandard } from '../../components/headerStandard'
import { RestaurantInfo } from '../../components/restaurantInfo'
import { SearchFood } from '../../components/searchFood'
import theme from '../../global/theme'
import { Container, TextPratos } from './styles'

export function RestaurantProfile({ route }: any) {
  const { id, name } = route.params

  function handlerEvent(text) {
    console.log('texto modificado', text)
  }
  return (
    <>
      <ScrollView>
        <HeaderStandard
          goBackButton={theme.icons.back_button}
          imageRight={theme.icons.favorite_white}
          title={'Restaurantes'}
        />
        <Container>
          <RestaurantInfo nameRestaurant={name} />
          <TextPratos>Pratos</TextPratos>
          <SearchFood
            nameRestaurant={name}
            textChange={(text) => handlerEvent(text)}
          />
          <CardFood />
        </Container>
      </ScrollView>
    </>
  )
}

// `/plate/restaurant/${id}?page=0&quantity=10`
