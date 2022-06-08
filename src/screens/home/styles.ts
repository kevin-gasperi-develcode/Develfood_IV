import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const TitleCategories = styled.Text`
  padding-left: ${RFValue(12)}px;
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text_dark};
  font-family: ${theme.fonts.secondaryReg};
  font-weight: 500;
`
export const FlatListMod = styled.FlatList`
  width: 100%;
  align-self: center;
  background-color: #ffffff;
`
export const Wrapper = styled.View`
  flex-grow: 1;
`
export const ViewLoading = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  justify-content: center;
`
