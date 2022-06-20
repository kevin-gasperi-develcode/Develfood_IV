import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(10)}px;
  border: 1.5px;
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(12)}px;
  align-self: center;
`
export const ImageLogo = styled.Image`
  width: ${RFValue(23)}px;
  height: ${RFValue(23)}px;
  margin: ${RFValue(5)}px;
`
export const Input = styled.TextInput`
  width: ${RFValue(220)}px;
`
export const ButtonSecurity = styled.TouchableOpacity`
  right: ${RFValue(10)}px;
  position: absolute;
`
export const SecurityImage = styled.Image`
  width: ${RFValue(23)}px;
  height: ${RFValue(23)}px;
`
