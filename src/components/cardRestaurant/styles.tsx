import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const ContainerButton = styled.TouchableOpacity`
  width: ${RFValue(156)}px;
  height: ${RFValue(173)}px;
  border-radius: ${RFValue(8)}px;
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

export const ViewInfo = styled.View.attrs({ elevation: 10 })`
  width: ${RFValue(156)}px;
  height: ${RFValue(69)}px;
  border-radius: 8px;
  top: ${RFValue(104)}px;
  position: absolute;
  background-color: white;
`
export const TextInfo = styled.Text`
  position: absolute;
  bottom: ${RFValue(34)}px;
  left: ${RFValue(12)}px;
  font-size: ${RFValue(14)}px;
  font-weight: ${RFValue(16)}px;
  font-weight: 500;
  color: ${theme.colors.text_dark};
  width: ${RFValue(140)}px;
`

export const TextCategories = styled.Text`
  position: absolute;
  bottom: ${RFValue(13)}px;
  left: ${RFValue(12)}px;
  font-size: ${RFValue(14)}px;
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
