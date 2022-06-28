import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useCart } from '../../context/cart'
import {
  Basket,
  CircleView,
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
  textProp: number
}

export function CartView({ textProp }: CartProps) {
  const basket = require('../../assets/icons/basket.png')
  const { totalPrice } = useCart()
  const navigation = useNavigation()

  const priceFormated = totalPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })

  function maxNumber() {
    if (textProp > 9) {
      const value = '9+'
      return value
    } else return textProp
  }

  function priceConverter() {
    const priceTwoValues = totalPrice.toFixed(2)
    const priceToStringFormatted = priceTwoValues.toString().replace('.', ',')
    return priceToStringFormatted
  }

  return (
    <WrapperCart>
      <ViewCart>
        <WrapperLeft>
          <Basket source={basket} resizeMode="contain" />
          <CircleView>
            <TextBasket> {maxNumber()} </TextBasket>
          </CircleView>
        </WrapperLeft>
        <TouchableOpacityCart
          onPress={() => {
            navigation.navigate('ShoppingCart' as never)
          }}
        >
          <TextCart>Ver carrinho</TextCart>
        </TouchableOpacityCart>
        <WrapperRight>
          <TextValue>R$ {priceConverter()} </TextValue>
        </WrapperRight>
      </ViewCart>
    </WrapperCart>
  )
}
