import React from 'react'
import {
  BarGray,
  Container,
  ImageMap,
  ImagePointer,
  TextDelivery,
  TextNeighborhood,
  TextNickname,
  TextStreet,
  TextStreetNumber,
  ViewAdress,
  ViewStreet,
} from './styles'

export function HeaderAdress() {
  const mapImage = require('../../assets/images/map_image.png')
  const mapPointer = require('../../assets/icons/map_pointer.png')
  return (
    <>
      <Container>
        <ImageMap source={mapImage} />
        <ImagePointer source={mapPointer} resizeMode="contain" />
        <ViewAdress>
          <TextDelivery>Entregar em:</TextDelivery>
          <ViewStreet>
            <TextStreet>Rua Arcy da Nobrega - </TextStreet>
            <TextStreetNumber>667</TextStreetNumber>
          </ViewStreet>
          <ViewStreet>
            <TextNeighborhood>Panazollo - </TextNeighborhood>
            <TextNickname>Apto: 107</TextNickname>
          </ViewStreet>
        </ViewAdress>
      </Container>
      <BarGray />
    </>
  )
}
