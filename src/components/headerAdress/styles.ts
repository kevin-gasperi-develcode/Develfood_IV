import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
  background-color: white;
  align-items: center;
  height: ${RFValue(86)}px;
  width: 100%;
  flex-direction: row;
`
export const ImageMap = styled.Image`
  left: ${RFValue(16)}px;
  height: ${RFValue(66)}px;
  width: ${RFValue(66)}px;
  border-radius: ${RFValue(8)}px;
`
export const ImagePointer = styled.Image`
  position: absolute;
  height: ${RFValue(20)}px;
  width: ${RFValue(20)}px;
  left: ${RFValue(38)}px;
`
export const ViewAdress = styled.View`
  left: ${RFValue(24)}px;
`
export const TextDelivery = styled.Text`
  font-weight: 400;
  color: ${theme.colors.icon_gray};
`
export const ViewStreet = styled.View`
  flex-direction: row;
`
export const TextStreet = styled.Text`
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text_dark};
`
export const TextStreetNumber = styled.Text`
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text_dark};
`
export const TextNeighborhood = styled.Text`
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text_dark};
`
export const TextNickname = styled.Text`
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text_dark};
`

export const BarGray = styled.View`
  height: ${RFValue(2.2)}px;
  width: 90%;
  border-radius: ${RFValue(2.2)}px;
  background-color: #dcdcdc;
  align-self: center;
  justify-self: center;
`
