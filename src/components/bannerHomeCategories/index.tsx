import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ContainerScroll, TextBanner, ViewBanner } from './styles'

export function BannerHomeCategories() {
  return (
    <ContainerScroll>
      <ScrollView
        scrollEventThrottle={3}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ViewBanner>
          <TextBanner ellipsizeMode={'tail'} numberOfLines={1}>
            Pizza
          </TextBanner>
        </ViewBanner>
        <ViewBanner>
          <TextBanner>Churrasco</TextBanner>
        </ViewBanner>
        <ViewBanner>
          <TextBanner>Almoço</TextBanner>
        </ViewBanner>
        <ViewBanner>
          <TextBanner>Massas</TextBanner>
        </ViewBanner>
      </ScrollView>
    </ContainerScroll>
  )
}
