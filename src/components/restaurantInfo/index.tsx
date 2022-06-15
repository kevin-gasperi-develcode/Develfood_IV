import React from 'react'
import theme from '../../global/theme'
import { SearchFood } from '../searchFood'
import { SearchRestaurants } from '../searchRestaurants'
import {
  BarGray,
  ImageRestautant,
  TittleRestaurant,
  TypeRestautant,
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
          <TypeRestautant>TypeFood</TypeRestautant>
        </ViewRestaurantInfo>
        <ImageRestautant
          resizeMode="cover"
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
