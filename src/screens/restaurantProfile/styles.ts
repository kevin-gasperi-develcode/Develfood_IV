import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 0 ${RFValue(21)}px;
`
export const TextPratos = styled.Text`
  margin-top: ${RFValue(18)}px;
  font-weight: 400;
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(21.09)}px;
  color: ${theme.colors.text_dark};
  padding-bottom: ${RFValue(18)}px;
`
