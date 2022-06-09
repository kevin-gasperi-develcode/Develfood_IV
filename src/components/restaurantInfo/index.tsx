import React from 'react'
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
  idRestaurant: string
}
export function RestaurantInfo({
  nameRestaurant,
  idRestaurant,
}: RestaurantProfile) {
  return (
    <>
      <ViewRestaurantContainer>
        <ViewRestaurantInfo>
          <TittleRestaurant>{nameRestaurant}</TittleRestaurant>
          <TipeRestautant>{idRestaurant}</TipeRestautant>
        </ViewRestaurantInfo>
        <ImageRestautant
          source={require('../../assets/images/restaurant-without-image.png')}
        />
      </ViewRestaurantContainer>
      <BarGray />
    </>
  )
}
