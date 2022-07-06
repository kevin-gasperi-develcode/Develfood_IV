import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
   background-color: ${theme.colors.background};
   flex: 1;
   padding: ${RFValue(36)}px;
   padding-bottom: ${RFValue(56)}px;
`
export const ViewOrderSuccess = styled.View`
   flex: 1;
   background-color: ${theme.colors.background};
`
export const TitleOrderSuccess = styled.Text`
   color: ${theme.colors.text_dark};
   font-weight: 500;
   font-size: ${RFValue(28)}px;
   align-self: center;
   margin-top: ${RFValue(36)}px;
   line-height: ${RFValue(33)}px;
`
export const ImageOrderSuccess = styled.Image`
   width: ${RFValue(296)}px;
   height: ${RFValue(296)}px;
   margin-top: ${RFValue(8)}px;
   align-self: center;
`
export const TextOrderSuccess = styled.Text`
   width: ${RFValue(273)}px;
   color: ${theme.colors.text_gray};
   font-weight: 700;
   font-size: ${RFValue(12)}px;
   align-self: center;
   margin-top: ${RFValue(30)}px;
   line-height: ${RFValue(14)}px;
   margin-left: ${RFValue(16)}px;
`
