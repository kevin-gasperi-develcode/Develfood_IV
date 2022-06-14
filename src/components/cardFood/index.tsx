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
  description?: string
  foodType?: any
  id?: number
  photo_url?: any
  price?: number
  restaurantName?: string
}
interface ImageData {
  id: number
  code: string
}

export function CardFood({
  description,
  price,
  id,
  photo_url,
}: RestaurantFood) {
  const { authState } = useAuth()
  const photo = photo_url.slice(33)
  console.log(photo)

  useEffect(() => {
    ;(async () => await fetchData())()
  }, [photo])

  const { fetchData, data } = useGet<ImageData>(
    photo,
    { headers: { Authorization: ` Bearer ${authState.token}` } },
    SetPhotoFunction,
  )

  function SetPhotoFunction(valuePhoto: any) {
    return valuePhoto
  }

  return (
    <Container>
      {photo_url ? (
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
          {description}
        </Tittle>
        <Description numberOfLines={3} ellipsizeMode={'tail'}>
          Um prato de camarão com fritas que é uma ótima opção para pedir quando
          se está com a família. Um prato de camarão com fritas que é uma ótima
          opção para pedir quando se está com a família.
        </Description>
        <Wrapper>
          <TextPrice>R$ {price}</TextPrice>
          <AddButton>
            <TextButton>Adicionar</TextButton>
          </AddButton>
        </Wrapper>
      </ViewFood>
    </Container>
  )
}
