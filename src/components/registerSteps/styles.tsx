import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  align-self: center;
  width: 240;
  height: 231;
`
export const ViewConlusionRegister = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ImageCircle = styled.Image`
  height: ${RFValue(47)}px;
  width: ${RFValue(47)}px;
`
export const ImageGirl = styled.Image`
  align-self: center;
  height: ${RFValue(200)}px;
`
