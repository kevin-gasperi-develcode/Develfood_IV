import React from 'react'
import theme from '../../global/theme'
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
        <ImageRestautant source={theme.icons.security_icon} />
      </ViewRestaurantContainer>
      <BarGray />
    </>
  )
}
