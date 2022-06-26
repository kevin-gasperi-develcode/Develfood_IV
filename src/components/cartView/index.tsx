import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Basket, Circle, TextBasket, TextCart, TouchableOpacityCart, ViewCart, WrapperLeft, WrapperRight } from './styles'

interface CartProps {
    textProp: number
}

export function CartView ({textProp}:CartProps ) {
    const circlebasket = require('../../assets/icons/circleBasket.png')
    const basket = require('../../assets/icons/basket.png')
    function maxNumber(){
        if( textProp >=9){
        const value = '  9+'
        return value
        }else  return textProp
    }
console.log (textProp)
    return (
        <ViewCart>
            <WrapperLeft>
                <Circle  source={circlebasket} resizeMode='contain' />
                <Basket source={basket} resizeMode='contain'/>
                <TextBasket> {maxNumber()} </TextBasket>
            </WrapperLeft>
            <TouchableOpacityCart >
                <TextCart>Ver carrinho</TextCart>
            </TouchableOpacityCart>
            <WrapperRight>
           <Text>R$ 49,99 </Text>
            </WrapperRight>
        </ViewCart>
    )
}