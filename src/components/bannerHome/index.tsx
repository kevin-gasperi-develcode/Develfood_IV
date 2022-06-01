import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import {
  Container,
  ImageBanner,
  ImageCircle,
  ViewCircles,
  ViewCirclesGroup,
} from './styles'

export function BannerHome() {
  return (
    <Container>
      <ScrollView
        scrollEventThrottle={3}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBanner
          source={require('../../assets/images/banner-image-1.png')}
        />
        <ImageBanner
          source={require('../../assets/images/banner-image-2.png')}
        />
        <ImageBanner
          source={require('../../assets/images/banner-image-3.png')}
        />
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
