import React from 'react'
import { Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import {
  Container,
  ContainerScroll,
  ImageSearch,
  InputRestaurants,
  TextBanner,
  ViewBanner,
} from './styles'

export function SearchRestaurants() {
  return (
    <Container>
      <ContainerScroll>
        <ScrollView
          scrollEventThrottle={3}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <ViewBanner>
            <TextBanner>Pizza</TextBanner>
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

      <InputRestaurants>
        <ImageSearch source={require('../../assets/icons/search-icon.png')} />
        <TextInput />
      </InputRestaurants>
    </Container>
  )
}
