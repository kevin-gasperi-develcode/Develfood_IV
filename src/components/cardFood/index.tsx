import React, { useEffect } from 'react'
import { useAuth } from '../../context/auth'
import theme from '../../global/theme'
import { useGet } from '../../services'
import {
  AddButton,
  Container,
  Description,
  ImageFood,
  TextButton,
  TextPrice,
  Tittle,
  ViewFood,
  Wrapper,
} from './styles'

interface RestaurantFood {
  name: string
  description?: string
  foodType?: any
  id?: number
  photo_url?: any
  price?: any
  restaurantName?: string
}
interface ImageData {
  id: number
  code: string
}

export function CardFood({
  name,
  description,
  price,
  id,
  photo_url,
}: RestaurantFood) {
  const { authState } = useAuth()
  const photo = photo_url.slice(33)

  useEffect(() => {
    ;(async () => await fetchData())()
  }, [photo])

  const { fetchData, data } = useGet<ImageData>(photo, {
    headers: { Authorization: ` Bearer ${authState.token}` },
  })
  function priceConverter() {
    const priceTwoValues = parseFloat(price).toFixed(2)
    const priceToStringFormatted = priceTwoValues.toString().replace('.', ',')
    return priceToStringFormatted
  }
  return (
    <Container>
      {data.code ? (
        <ImageFood
          source={{
            uri: data.code,
          }}
        />
      ) : (
        <ImageFood source={theme.icons.restaurant_without_img} />
      )}
      <ViewFood>
        <Tittle numberOfLines={1} ellipsizeMode={'tail'}>
          {name}
        </Tittle>
        <Description numberOfLines={3} ellipsizeMode={'tail'}>
          {description}
        </Description>
        <Wrapper>
          <TextPrice>R$ {priceConverter()}</TextPrice>
          <AddButton>
            <TextButton>Adicionar</TextButton>
          </AddButton>
        </Wrapper>
      </ViewFood>
    </Container>
  )
}
