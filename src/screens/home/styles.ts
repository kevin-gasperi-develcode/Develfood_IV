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
