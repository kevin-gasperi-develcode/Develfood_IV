import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import theme from "../../global/theme"

export const ViewCart = styled.View`
flex-direction: row;
background-color: ${theme.colors.background_red};
width: 100%;
height: ${RFValue(55)}px;
border-radius: ${RFValue(6)}px;
position: absolute;
bottom: ${RFValue(12)}px;
align-self: center;
`
export const WrapperLeft = styled.View`
position: absolute;
align-items: center;
width: ${RFValue(32)}px;
left:  ${RFValue(18)}px;
`
export const Basket = styled.Image`
height: ${RFValue(25.2)}px;
width: ${RFValue(32)}px;
margin-top: ${RFValue(18)}px;
`
export const Circle = styled.Image`
height: ${RFValue(21.6)}px;
width: ${RFValue(21.6)}px;
position: absolute;
right: ${RFValue(-8)}px;
top: ${RFValue(5)}px;
`
export const TextBasket = styled.Text`
color: ${theme.colors.icon_red};
font-weight: 500;
font-size: ${RFValue(16)}px;
position: absolute;
right: ${RFValue(-6.9)}px;
top: ${RFValue(4)}px;
`
export const TouchableOpacityCart = styled.TouchableOpacity`
width: 100%;
align-items: center;
justify-content: center;
`
export const TextCart = styled.Text`
color: ${theme.colors.icon_white};
font-weight: 400;
font-size: ${RFValue(16)}px;
`
export const WrapperRight = styled.View`
position: absolute;
align-items: center;
width: ${RFValue(60)}px;
right: ${RFValue(18)}px;
`