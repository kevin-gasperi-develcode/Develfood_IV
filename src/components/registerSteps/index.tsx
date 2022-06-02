import React from 'react'
import { Image } from 'react-native'
import { Container, ImageGirl, ViewConlusionRegister } from './styles'

export function RegisterSteps({ circle, circle1, circle2, girl }: any) {
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
