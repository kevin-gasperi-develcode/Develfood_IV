import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import {
  Container,
  ImageCircle,
  ImageGirl,
  ViewConlusionRegister,
} from './styles'

interface ImageProps {
  circle: ImageSourcePropType
  circle1: ImageSourcePropType
  circle2: ImageSourcePropType
  girl: ImageSourcePropType
}

export function RegisterSteps({ circle, circle1, circle2, girl }: ImageProps) {
  return (
    <Container>
      <ViewConlusionRegister>
        <ImageCircle resizeMode="contain" source={circle} />
        <ImageCircle resizeMode="contain" source={circle1} />
        <ImageCircle resizeMode="contain" source={circle2} />
      </ViewConlusionRegister>
      <ImageGirl source={girl} resizeMode="contain" />
    </Container>
  )
}
