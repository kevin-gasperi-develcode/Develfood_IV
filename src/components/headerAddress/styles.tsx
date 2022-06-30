import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.background_red};
`
export const TextContainer = styled.View`
  align-items: center;
  width: 100%;
  justify-content: center;
`
export const ImageGoBack = styled.Image`
  height: ${RFValue(21)}px;
  width: ${RFValue(24)}px;
  position: absolute;
  margin-top: ${RFValue(17)}px;
  margin-left: ${RFValue(16)}px;
`
export const TextTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_white};
`
