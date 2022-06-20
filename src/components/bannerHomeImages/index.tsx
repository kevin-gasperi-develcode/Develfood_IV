import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import {
  Container,
  ImageBanner,
  ImageCircle,
  ViewCircles,
  ViewCirclesGroup,
} from './styles'

export function BannerHomeImage() {
  const banner1 = require('../../assets/images/banner-image-1.png')
  const banner2 = require('../../assets/images/banner-image-2.png')
  const banner3 = require('../../assets/images/banner-image-3.png')

  return (
    <Container>
      <ScrollView
        scrollEventThrottle={3}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBanner source={banner1} />
        <ImageBanner source={banner2} />
        <ImageBanner source={banner3} />
      </ScrollView>
      <ViewCircles>
        <ViewCirclesGroup>
          <ImageCircle source={require('../../assets/icons/ellipse-red.png')} />
          <ImageCircle
            source={require('../../assets/icons/ellipse-grey.png')}
          />
          <ImageCircle
            source={require('../../assets/icons/ellipse-grey.png')}
          />
        </ViewCirclesGroup>
      </ViewCircles>
    </Container>
  )
}
