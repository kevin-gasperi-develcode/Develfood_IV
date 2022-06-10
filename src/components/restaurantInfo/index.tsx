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
  idRestaurant?: string
}
export function RestaurantInfo({ nameRestaurant }: RestaurantProfile) {
  return (
    <>
      <ViewRestaurantContainer>
        <ViewRestaurantInfo>
          <TittleRestaurant>{nameRestaurant}</TittleRestaurant>
          <TipeRestautant>Pizza</TipeRestautant>
        </ViewRestaurantInfo>
        <ImageRestautant
          resizeMode="stretch"
          source={require('../../assets/icons/bobs.png')}
        />
      </ViewRestaurantContainer>
      <BarGray />
    </>
  )
}
