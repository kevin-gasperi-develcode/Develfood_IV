import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { CardFood } from '../../components/cardFood'
import { CartView } from '../../components/cartView'
import { HeaderAdress } from '../../components/headerAdress'
import { HeaderStandard } from '../../components/headerStandard'
import { RestaurantInfo } from '../../components/restaurantInfo'
import { useCart } from '../../context/cart'
import theme from '../../global/theme'
import { Container, FlatListmodified, TextMeusItens } from './styles'

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
         {totalAmount.quantity >= 1 ? (
            <CartView
               textCart={totalAmount.quantity}
               leftViewItem="dollar"
               centerButton="Finalizar pedido"
            />
         ) : null}
      </>
   )
}
