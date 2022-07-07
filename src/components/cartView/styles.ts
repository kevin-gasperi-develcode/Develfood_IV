import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const WrapperCart = styled.View`
  background-color: ${theme.colors.background};
  width: 100%;
  height: ${RFValue(62)}px;
  justify-content: center;
`
export const ViewCart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_red};
  width: 90%;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(6)}px;
  position: absolute;
  align-self: center;
`
export const WrapperLeft = styled.View`
  position: absolute;
  width: ${RFValue(32)}px;
  left: ${RFValue(18)}px;
`
export const ImageDollar = styled.Image`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
`
export const Basket = styled.Image`
  height: ${RFValue(25.2)}px;
  width: ${RFValue(32)}px;
`
export const CircleView = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
  height: ${RFValue(21.6)}px;
  width: ${RFValue(21.6)}px;
  position: absolute;
  right: ${RFValue(-8)}px;
  top: ${RFValue(-10)}px;
  border-radius: ${RFValue(25)}px;
`
export const TextBasket = styled.Text`
  color: ${theme.colors.icon_red};
  font-family: 'Mogra-Regular';
  font-weight: 500;
  font-size: ${RFValue(15)}px;
`
export const TouchableOpacityCart = styled.TouchableOpacity`
  width: ${RFValue(150)}px;
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
  justify-content: center;
  width: ${RFValue(80)}px;
  right: ${RFValue(18)}px;
`
export const TextValue = styled.Text`
  color: ${theme.colors.icon_white};
  font-weight: 700;
  font-size: ${RFValue(14)}px;
`
