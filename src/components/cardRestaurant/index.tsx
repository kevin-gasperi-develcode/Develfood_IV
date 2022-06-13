import React from 'react'
import { GestureResponderEvent } from 'react-native'
import {
  ContainerButton,
  ImageFavorite,
  ImageRate,
  ImageRestaurant,
  RateContainer,
  TextCategories,
  TextInfo,
  TextRate,
  ViewFavorite,
  ViewInfo,
} from './styles'

interface RestaurantProps {
  id?: any
  dataImage?: string
  name: string
  onPress: (event: GestureResponderEvent) => void
}
export function CardRestaurant({
  id,
  dataImage,
  name,
  onPress,
}: RestaurantProps) {
  return (
    <ContainerButton onPress={onPress} activeOpacity={1}>
      <ImageRestaurant
        source={
          dataImage
            ? { uri: dataImage }
            : require('../../assets/images/restaurant-without-image.png')
        }
      />
      <ViewFavorite>
        <ImageFavorite
          source={require('../../assets/icons/favorite-white.png')}
        />
      </ViewFavorite>
      <ViewInfo>
        <TextInfo>{name}</TextInfo>
        <TextCategories>Pizza</TextCategories>
        <RateContainer>
          <ImageRate source={require('../../assets/icons/star-rate.png')} />
          <TextRate>{id}</TextRate>
        </RateContainer>
      </ViewInfo>
    </ContainerButton>
  )
}
