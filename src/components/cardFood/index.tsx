import React, { useEffect } from 'react'
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
   ImageTrashSwipe,
   TextButton,
   TextNumberItem,
   TextPrice,
   TextRemove,
   Tittle,
   TouchableOpacityItem,
   TouchableRemoveItem,
   ViewFood,
   ViewItems,
   ViewNumberItem,
   Wrapper,
} from './styles'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Text, View } from 'react-native'

interface RestaurantFood {
   name: string
   description?: string
   id: number
   photo_url: string
   price: number
   restaurantName: string
   restaurantId: number
   restaurantPhoto: string
   food_types: string
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
   restaurantId,
   restaurantName,
   restaurantPhoto,
   food_types,
}: RestaurantFood) {
   const { authState } = useAuth()
   const photo = photo_url?.slice(33)
   const { addPlates, removePlates, totalAmount, cartItems } = useCart()
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
      const priceTwoValues = parseFloat(price.toString()).toFixed(2)
      const priceToStringFormatted = priceTwoValues.toString().replace('.', ',')
      return priceToStringFormatted
   }

   function renderLeft() {
      return (
         <TouchableRemoveItem>
            <View>
               <ImageTrashSwipe source={trash} />
               <TextRemove>Remover</TextRemove>
            </View>
         </TouchableRemoveItem>
      )
   }

   const itemFound = cartItems.find((CartItem) => CartItem.id === id)
   function buttonDemand() {
      if (itemFound?.quantity === 0 || !itemFound) {
         return (
            <AddButton
               onPress={() => {
                  addPlates({
                     name,
                     description,
                     id,
                     photo_url,
                     price,
                     restaurantName,
                     restaurantId,
                     restaurantPhoto,
                     food_types,
                  })
               }}
            >
               <TextButton>Adicionar</TextButton>
            </AddButton>
         )
      } else if (itemFound?.quantity === 1) {
         return (
            <ViewItems>
               <TouchableOpacityItem
                  onPress={() =>
                     removePlates({
                        name,
                        description,
                        id,
                        photo_url,
                        price,
                        restaurantName,
                        restaurantId,
                        restaurantPhoto,
                        food_types,
                     })
                  }
               >
                  <ImageTrash source={trash} resizeMode={'contain'} />
               </TouchableOpacityItem>

               <ViewNumberItem>
                  <TextNumberItem>{itemFound.quantity}</TextNumberItem>
               </ViewNumberItem>

               <TouchableOpacityItem
                  onPress={() =>
                     addPlates({
                        name,
                        description,
                        id,
                        photo_url,
                        price,
                        restaurantName,
                        restaurantId,
                        restaurantPhoto,
                        food_types,
                     })
                  }
               >
                  <ImageAddRem source={plus} resizeMode={'contain'} />
               </TouchableOpacityItem>
            </ViewItems>
         )
      } else {
         return (
            <ViewItems>
               <TouchableOpacityItem
                  onPress={() =>
                     removePlates({
                        name,
                        description,
                        id,
                        photo_url,
                        price,
                        restaurantName,
                        restaurantId,
                        restaurantPhoto,
                        food_types,
                     })
                  }
               >
                  <ImageAddRem source={minus} resizeMode={'contain'} />
               </TouchableOpacityItem>

               <ViewNumberItem>
                  <TextNumberItem>{itemFound.quantity}</TextNumberItem>
               </ViewNumberItem>

               <TouchableOpacityItem
                  onPress={() =>
                     addPlates({
                        name,
                        description,
                        id,
                        photo_url,
                        price,
                        restaurantName,
                        restaurantId,
                        restaurantPhoto,
                        food_types,
                     })
                  }
               >
                  <ImageAddRem source={plus} resizeMode={'contain'} />
               </TouchableOpacityItem>
            </ViewItems>
         )
      }
   }
   return (
      <Swipeable renderLeftActions={renderLeft}>
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
      </Swipeable>
   )
}
