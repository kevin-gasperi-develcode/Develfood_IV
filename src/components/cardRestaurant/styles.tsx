import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
  width: ${RFValue(156)}px;
  height: ${RFValue(173)}px;
  border-radius: 8px;
  margin-top: ${RFValue(18)}px;
  margin-right: ${RFValue(25)}px;
`
export const ViewFavorite = styled.View`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  border: ${RFValue(1)}px;
  background-color: ${theme.colors.background};
  border-bottom-left-radius: 16px;
  border-top-right-radius: 8px;
  border-color: #bfbaba;
  justify-content: center;
  position: absolute;
  right: ${RFValue(0)}px;
`
export const ImageFavorite = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(22)}px;
  align-self: center;
`
export const ImageRestaurant = styled.Image`
  width: ${RFValue(156)}px;
  height: ${RFValue(127)}px;
  border-radius: 8px;
  position: absolute;
`

export const ViewInfo = styled.View`
  width: ${RFValue(156)}px;
  height: ${RFValue(69)}px;
  border: ${RFValue(1.5)}px;
  border-radius: 8px;
  border-color: #bfbaba;
  top: ${RFValue(104)}px;
  position: absolute;
  background-color: white;
`
export const TextInfo = styled.Text`
  position: absolute;
  bottom: ${RFValue(34)}px;
  left: ${RFValue(12)}px;
  font-size: ${RFValue(12)}px;
  font-weight: ${RFValue(16)}px;
  font-weight: 500;
  color: ${theme.colors.text_dark};
`

export const TextCategories = styled.Text`
  position: absolute;
  bottom: ${RFValue(13)}px;
  left: ${RFValue(12)}px;
  font-size: ${RFValue(12)}px;
  font-weight: ${RFValue(16)}px;
  font-weight: 400;
  color: ${theme.colors.text_gray};
`
export const RateContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: ${RFValue(12)}px;
  right: ${RFValue(13)}px;
  align-items: center;
`
export const TextRate = styled.Text`
  color: ${theme.colors.icon_red};
  margin-left: ${RFValue(5)}px;
  font-weight: 400;
`
export const ImageRate = styled.Image`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
`