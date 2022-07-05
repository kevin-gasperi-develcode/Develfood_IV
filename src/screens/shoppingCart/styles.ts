import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
   flex: 1;
   background-color: ${theme.colors.background};
`

export const ContainerHeader = styled.View`
   background-color: ${theme.colors.background};
   padding: ${RFValue(10)}px;
`
export const ContainerFlatList = styled.View`
   background-color: ${theme.colors.background_gray};
   border-top-left-radius: ${RFValue(100)}px;
   margin-left: ${RFValue(20)}px;
   flex: 1;
`
export const ItensView = styled.View`
   margin: ${RFValue(15)}px;
`

export const TextMeusItens = styled.Text`
   color: ${theme.colors.icon_dark};
   font-weight: 400;
   font-size: ${RFValue(20)}px;
   align-self: center;
`
export const FlatListmodified = styled.FlatList`
   padding-left: 10;
`

export const ViewEmptyCart = styled.View`
   flex: 1;
   background-color: ${theme.colors.background};
`
export const ImageEmptyCart = styled.Image`
   width: ${RFValue(375)}px;
   height: ${RFValue(375)}px;
   margin-top: ${RFValue(36)}px;
`
export const TextEmptyCart = styled.Text`
   color: ${theme.colors.icon_dark};
   font-weight: 400;
   font-size: ${RFValue(18)}px;
   align-self: center;
   margin-top: ${RFValue(-40)}px;
`
