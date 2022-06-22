import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useState } from 'react'
import { Alert, GestureResponderEvent, View } from 'react-native'
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
  id: number
  photo_url?: any
  price?: any
  restaurantName?: string
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
}: RestaurantFood) {
  const { authState } = useAuth()
  const photo = photo_url.slice(33)
  const [idPlate, setIdPlate] = useState<unknown[]>([])

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

  function functionCount(id: unknown) {
    setIdPlate([...idPlate, ...id])
    console.log(idPlate)
    // var count = 0
    // count++
    // console.log(count)
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

          <AddButton
            onPress={(item: GestureResponderEvent) => functionCount(id)}
          >
            <TextButton>Adicionar</TextButton>
          </AddButton>
        </Wrapper>
      </ViewFood>
    </Container>
  )
}

//request  {
//   "costumer": {"id": 18},
//   "restaurant": {"id": 13},
//   "date": "2022-05-10 14:40:22",
//   "dateLastUpdated": "2022-05-10 14:40:22",
//   "totalValue": 43.50,
//   "paymentType": "card",
//   "status": "PEDIDO_REALIZADO",
//   "requestItems": [
//       {
//           "plate":{
//               "id":43,
//               "price":49.90
//           },
//           "quantity": 2,
//           "price": 49.90,
//           "observation": ""
//       }
//   ],
//   "restaurantPromotion": null
// }

// resposta da request {
//   "id": 77,
//   "costumer": {
//       "id": 243,
//       "firstName": "g",
//       "lastName": "g",
//       "address": [],
//       "photo_url": "https://develfood-3.herokuapp.com/photo/337"
//   },
//   "restaurant": {
//       "id": 1,
//       "name": "Vinicius's Bar",
//       "photo_url": "https://develfood-3.herokuapp.com/photo/1",
//       "food_types": [
//           {
//               "id": 1,
//               "name": "FASTFOOD"
//           },
//           {
//               "id": 2,
//               "name": "PIZZA"
//           },
//           {
//               "id": 3,
//               "name": "ITALIANA"
//           },
//           {
//               "id": 4,
//               "name": "DOCE"
//           }
//       ]
//   },
//   "date": "2022-06-22 10:56:42",
//   "dateLastUpdated": "2022-06-22 10:56:42",
//   "totalValue": 81.12,
//   "paymentType": "card",
//   "status": "PEDIDO_REALIZADO",
//   "requestItems": null
// }
