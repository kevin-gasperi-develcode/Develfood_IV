import React from 'react'
import theme from '../../global/theme'
import {
  BarGray,
  ImageRestautant,
  TittleRestaurant,
  TypeRestautant,
  ViewRestaurantContainer,
  ViewRestaurantInfo,
} from './styles'

interface RestaurantProfile {
  barGray?: boolean
  nameRestaurant: string
  imageRestaurant: string
  food_types?: {
    id: number
    name: string
  }
}
export function RestaurantInfo({
  nameRestaurant,
  imageRestaurant,
  food_types,
  barGray,
}: RestaurantProfile) {
  function dataTypesFunction() {
    if (food_types === undefined) {
      return '--'
    } else {
      return food_types.name
    }
  }
  return (
    <>
      <ViewRestaurantContainer>
        <ViewRestaurantInfo>
          <TittleRestaurant>{nameRestaurant}</TittleRestaurant>
          <TypeRestautant>{dataTypesFunction()}</TypeRestautant>
        </ViewRestaurantInfo>
        <ImageRestautant
          resizeMode="cover"
          source={
            imageRestaurant
              ? { uri: imageRestaurant }
              : theme.icons.restaurant_without_img
          }
        />
      </ViewRestaurantContainer>
      {barGray ? <BarGray /> : null}
    </>
  )
}
