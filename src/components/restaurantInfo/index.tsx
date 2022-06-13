import React from 'react'
import theme from '../../global/theme'
import { SearchFood } from '../searchFood'
import { SearchRestaurants } from '../searchRestaurants'
import {
  BarGray,
  ImageRestautant,
  TipeRestautant,
  TittleRestaurant,
  ViewRestaurantContainer,
  ViewRestaurantInfo,
} from './styles'

interface RestaurantProfile {
  nameRestaurant: string
  imageRestaurant: string
}
export function RestaurantInfo({
  nameRestaurant,
  imageRestaurant,
}: RestaurantProfile) {
  return (
    <>
      <ViewRestaurantContainer>
        <ViewRestaurantInfo>
          <TittleRestaurant>{nameRestaurant}</TittleRestaurant>
          <TipeRestautant>Pizza</TipeRestautant>
        </ViewRestaurantInfo>
        <ImageRestautant
          resizeMode="stretch"
          source={
            imageRestaurant
              ? { uri: imageRestaurant }
              : require('../../assets/images/restaurant-without-image.png')
          }
        />
      </ViewRestaurantContainer>
      <BarGray />
    </>
  )
}
