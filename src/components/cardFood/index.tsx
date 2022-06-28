import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useAuth } from '../../context/auth'
import { useCart } from '../../context/cart'
import theme from '../../global/theme'
import { useGet } from '../../services'
import {
  AddButton,
  Container,
  Description,
  ImageAddRem,
  ImageFood,
  ImageTrash,
  TextButton,
  TextNumberItem,
  TextPrice,
  Tittle,
  TouchableOpacityItem,
  ViewFood,
  ViewItems,
  ViewNumberItem,
  Wrapper,
} from './styles'

interface RestaurantFood {
  name: string
  description?: string
  foodType?: any
  id: number
  photo_url?: any
  price?: any
  restaurantName?: string
  restaurantId: number
}
interface ImageData {
  id: number
  code: string
}
interface IdPlate {
  idPlate: any
}
;[]

export function CardFood({
  name,
  description,
  price,
  id,
  photo_url,
  restaurantId,
}: RestaurantFood) {
  const { authState } = useAuth()
  const photo = photo_url.slice(33)
  const { addPlates, removePlates, demand } = useCart()
  const plus = require('../../assets/icons/plus.png')
  const minus = require('../../assets/icons/minus.png')
  const trash = require('../../assets/icons/trash.png')

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

  const itemFount = demand.find((item) => item.plate.id === id)?.quantity
  function buttonDemand() {
    if (!itemFount) {
      return (
        <AddButton
          onPress={() => {
            addPlates(id, price, restaurantId)
          }}
        >
          <TextButton>Adicionar</TextButton>
        </AddButton>
      )
    } else if (itemFount === 1) {
      return (
        <ViewItems>
          <TouchableOpacityItem
            onPress={() => removePlates(id, price, restaurantId)}
          >
            <ImageTrash source={trash} resizeMode={'contain'} />
          </TouchableOpacityItem>

          <ViewNumberItem>
            <TextNumberItem>{itemFount}</TextNumberItem>
          </ViewNumberItem>

          <TouchableOpacityItem
            onPress={() => addPlates(id, price, restaurantId)}
          >
            <ImageAddRem source={plus} resizeMode={'contain'} />
          </TouchableOpacityItem>
        </ViewItems>
      )
    } else {
      return (
        <ViewItems>
          <TouchableOpacityItem
            onPress={() => removePlates(id, price, restaurantId)}
          >
            <ImageAddRem source={minus} resizeMode={'contain'} />
          </TouchableOpacityItem>

          <ViewNumberItem>
            <TextNumberItem>{itemFount}</TextNumberItem>
          </ViewNumberItem>

          <TouchableOpacityItem
            onPress={() => addPlates(id, price, restaurantId)}
          >
            <ImageAddRem source={plus} resizeMode={'contain'} />
          </TouchableOpacityItem>
        </ViewItems>
      )
    }
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
          {buttonDemand()}
        </Wrapper>
      </ViewFood>
    </Container>
  )
}
