import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { Container, ImageGirl, ViewConlusionRegister } from './styles'

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
        <Image source={circle} />
        <Image source={circle1} />
        <Image source={circle2} />
      </ViewConlusionRegister>
      <ImageGirl>
        <Image source={girl} />
      </ImageGirl>
    </Container>
  )
}
