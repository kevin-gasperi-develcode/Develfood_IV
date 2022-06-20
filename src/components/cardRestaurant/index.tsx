import React, { useEffect } from 'react'
import { GestureResponderEvent, View } from 'react-native'
import { useAuth } from '../../context/auth'
import theme from '../../global/theme'
import { useGet } from '../../services'

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
interface FoodTypes {
  id: number
  name: string
}
interface RestaurantProps {
  id?: any
  dataImage?: any

  name: string
  onPress: (event: GestureResponderEvent) => void
  foodTypes: FoodTypes
}
interface ImageData {
  id: number
  code: string
}

export function CardRestaurant({
  id,
  dataImage,
  name,
  onPress,
  foodTypes,
}: RestaurantProps) {
  const { authState } = useAuth()
  const photo = dataImage.slice(33)
  const starRate = require('../../assets/icons/star-rate.png')

  useEffect(() => {
    ;(async () => await fetchData())()
  }, [photo])

  useEffect(() => {
    ;(async () => await fetchId())()
  }, [id])

  const { fetchData, data: fetchDataImage } = useGet<ImageData>(photo, {
    headers: { Authorization: ` Bearer ${authState.token}` },
  })

  const { fetchData: fetchId, data: dataId } = useGet<number>(
    `restaurantEvaluation/${id}/grade`,
    {
      headers: { Authorization: ` Bearer ${authState.token}` },
    },
  )

  function dataIdFunction() {
    if (dataId?.toString() === '[object Object]') {
      return '-'
    } else {
      return dataId?.toString()
    }
  }

  function dataTypesFunction() {
    if (foodTypes === undefined) {
      return '--'
    } else {
      return foodTypes.name
    }
  }

  return (
    <ContainerButton onPress={onPress} activeOpacity={1}>
      <ImageRestaurant
        source={
          fetchDataImage.code
            ? { uri: fetchDataImage.code }
            : theme.icons.restaurant_without_img
        }
      />
      <ViewFavorite>
        <ImageFavorite source={theme.icons.favorite_white} />
      </ViewFavorite>
      <ViewInfo>
        <TextInfo>{name}</TextInfo>
        <TextCategories>{dataTypesFunction()}</TextCategories>
        <RateContainer>
          <ImageRate source={starRate} resizeMode={'contain'} />
          <View>
            <TextRate>{dataIdFunction()}</TextRate>
          </View>
        </RateContainer>
      </ViewInfo>
    </ContainerButton>
  )
}
