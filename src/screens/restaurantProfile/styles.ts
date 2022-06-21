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
export const ViewLoading = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  justify-content: center;
`

export const ImageNotFound = styled.Image`
  margin-top: ${RFValue(25)}px;
  margin-bottom: ${RFValue(25)}px;
  align-self: center;
  width: ${RFValue(375)}px;
  height: ${RFValue(228)}px;
`

export const TextNotFound = styled.Text`
  align-self: center;
  font-weight: 400;
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(21)}px;
  color: ${theme.colors.text_dark};
`
