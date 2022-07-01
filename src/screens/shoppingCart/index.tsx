import React, { useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CardFood } from '../../components/cardFood'
import { ViewItems } from '../../components/cardFood/styles'
import { CartView } from '../../components/cartView'
import { ViewCart } from '../../components/cartView/styles'
import { HeaderAdress } from '../../components/headerAdress'
import { HeaderStandard } from '../../components/headerStandard'
import { RestaurantInfo } from '../../components/restaurantInfo'
import { useAuth } from '../../context/auth'
import { useCart } from '../../context/cart'
import theme from '../../global/theme'
import { useGet } from '../../services'
import { Container, FlatListmodified, TextMeusItens } from './styles'

interface RestaurantFood {
   name: string
   description?: string
   id: number
   photo_url?: string
   price: number
   restaurantName?: string
   restaurantId: number
}

export function ShoppingCart() {
   const { totalAmount, cartItems } = useCart()
   const { authState } = useAuth()
   const [dataFood, setDataFood] = useState<RestaurantFood[]>([])

   const [restaurantData, setRestaurantData] = useState<any>({
      name: '',
      food_types: {
         id: 0,
         name: '',
      },
   })

   return (
      <>
         <StatusBar
            barStyle={'default'}
            backgroundColor={theme.colors.background_red}
         />
         <HeaderStandard
            backGround="red"
            leftButton={theme.icons.back_button_x_white}
            title="Compras"
         />
         <Container>
            <FlatListmodified
               showsVerticalScrollIndicator={false}
               ListHeaderComponent={
                  <>
                     <HeaderAdress />
                     <RestaurantInfo
                        imageRestaurant=""
                        nameRestaurant={restaurantData.name}
                        // food_types={restaurantData.food_types}
                     />
                     <TextMeusItens>Meus Itens</TextMeusItens>
                  </>
               }
               data={cartItems}
               keyExtractor={(item: any) => item.id}
               renderItem={(item: any) => (
                  <CardFood
                     name={item.name}
                     description={item.description}
                     price={item.price}
                     id={item.id}
                     photo_url={item.photo_url}
                     restaurantId={item.restaurantId}
                  />
               )}
            />
         </Container>
         <CartView
            textCart={totalAmount.quantity}
            leftViewItem="dollar"
            centerButton="Finalizar pedido"
         />
      </>
   )
}
