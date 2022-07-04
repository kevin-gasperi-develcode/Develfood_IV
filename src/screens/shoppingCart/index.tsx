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

// interface RestaurantFood {
//    name: string
//    description?: string
//    id: number
//    photo_url?: string
//    price: number
//    restaurantName?: string
//    restaurantId: number
// }

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
export function ShoppingCart() {
   const { totalAmount, cartItems, restaurant } = useCart()
   const [dataFood, setDataFood] = useState<RestaurantFood[]>([])

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
                        imageRestaurant={restaurant.image}
                        nameRestaurant={restaurant.name}
                        food_types={restaurant.type}
                        barGray={false}
                     />
                     <TextMeusItens>Meus Itens</TextMeusItens>
                  </>
               }
               data={cartItems}
               keyExtractor={(item: any) => item.id}
               renderItem={({ item }: { item: RestaurantFood }) => (
                  <CardFood
                     name={item.name}
                     description={item.description}
                     price={item.price}
                     id={item.id}
                     photo_url={item.photo_url}
                     restaurantId={restaurant.id}
                     restaurantName={restaurant.name}
                     restaurantPhoto={restaurant.image}
                     food_types={restaurant.type}
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
