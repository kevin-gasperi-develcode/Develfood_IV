import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useCart } from '../../context/cart'
import {
   Basket,
   CircleView,
   ImageDollar,
   TextBasket,
   TextCart,
   TextValue,
   TouchableOpacityCart,
   ViewCart,
   WrapperCart,
   WrapperLeft,
   WrapperRight,
} from './styles'

interface CartProps {
   textCart: any
   leftViewItem: string
   centerButton: string
}

export function CartView({ textCart, leftViewItem, centerButton }: CartProps) {
   const basket = require('../../assets/icons/basket.png')
   const { totalAmount } = useCart()
   const navigation = useNavigation()
   const dollarImage = require('../../assets/icons/dollar_sign.png')

   function maxNumber() {
      if (textCart > 9) {
         const value = '9+'
         return value
      } else return textCart
   }

   function priceConverter() {
      const priceTwoValues = totalAmount.price.toFixed(2)
      const priceToStringFormatted = priceTwoValues.toString().replace('.', ',')
      return priceToStringFormatted
   }

   return (
      <WrapperCart>
         <ViewCart>
            <WrapperLeft>
               {leftViewItem === 'dollar' ? (
                  <ImageDollar source={dollarImage} />
               ) : leftViewItem === 'basket' ? (
                  <>
                     <Basket source={basket} resizeMode="contain" />
                     <CircleView>
                        <TextBasket> {maxNumber()} </TextBasket>
                     </CircleView>
                  </>
               ) : null}
            </WrapperLeft>
            <TouchableOpacityCart
               onPress={() => {
                  centerButton === 'Ver carrinho'
                     ? navigation.navigate('ShoppingCart' as never)
                     : centerButton === 'Finalizar pedido'
                     ? navigation.navigate('Home' as never) // Alterar para tela de sucesso
                     : null
               }}
            >
               <TextCart>
                  {centerButton === 'Ver carrinho'
                     ? 'Ver carrinho'
                     : centerButton === 'Finalizar pedido'
                     ? 'Finalizar pedido'
                     : null}
               </TextCart>
            </TouchableOpacityCart>
            <WrapperRight>
               <TextValue>R$ {priceConverter()} </TextValue>
            </WrapperRight>
         </ViewCart>
      </WrapperCart>
   )
}
