import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const ViewRestaurantContainer = styled.View`
   background-color: white;
   height: ${RFValue(99)}px;
   width: 100%;
`
export const ViewRestaurantInfo = styled.View`
   margin-top: ${RFValue(12)}px;
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
export const TypeRestautant = styled.Text`
   font-size: ${RFValue(12)}px;
   line-height: ${RFValue(14.06)}px;
   font-weight: 400;
   color: ${theme.colors.text_gray};
`
export const ImageRestautant = styled.Image`
   margin-top: ${RFValue(12)}px;
   height: ${RFValue(68)}px;
   width: ${RFValue(68)}px;
   position: absolute;
   right: ${RFValue(14)}px;
   border-radius: ${RFValue(33)}px;
`
export const BarGray = styled.View`
   height: ${RFValue(2.2)}px;
   width: 90%;
   background-color: #dcdcdc;
   align-self: center;
`
