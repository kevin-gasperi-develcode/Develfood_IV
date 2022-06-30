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
          <TextBanner ellipsizeMode={'tail'} numberOfLines={1}>
            Churrasco
          </TextBanner>
        </ViewBanner>
        <ViewBanner>
          <TextBanner ellipsizeMode={'tail'} numberOfLines={1}>
            Almoço
          </TextBanner>
        </ViewBanner>
        <ViewBanner>
          <TextBanner ellipsizeMode={'tail'} numberOfLines={1}>
            Massas
          </TextBanner>
        </ViewBanner>
      </ScrollView>
    </ContainerScroll>
  )
}
