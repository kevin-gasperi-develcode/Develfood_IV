import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const ViewRestaurantContainer = styled.View`
  height: ${RFValue(99)}px;
  width: 100%;
`
export const ViewRestaurantInfo = styled.View`
  height: ${RFValue(60)}px;
  width: ${RFValue(343)}px;
`
export const TittleRestaurant = styled.Text`
  margin-top: ${RFValue(18)}px;
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(21.9)}px;
  font-weight: 400;
  color: ${theme.colors.text_dark};
`
export const TipeRestautant = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(14.06)}px;
  font-weight: 400;
  color: ${theme.colors.text_gray};
`
export const ImageRestautant = styled.Image`
  height: ${RFValue(60)}px;
  width: ${RFValue(60)}px;
  position: absolute;
  right: ${RFValue(14)}px;
  margin-bottom: ${RFValue(26)}px;
`
export const BarGray = styled.View`
  height: ${RFValue(2.2)}px;
  width: ${RFValue(343)}px;
  background-color: #f0f0f5;
  align-self: center;
`
