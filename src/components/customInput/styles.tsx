import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(10)}px;
  border: 1.5px;
  border-color: ${({ theme }) => theme.colors.icon_gray};
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(12)}px;
  align-self: center;
`
export const Input = styled.TextInput``
export const ButtonSecurity = styled.TouchableOpacity`
  right: ${RFValue(10)}px;
  position: absolute;
`
export const SecurityItem = styled.Image``
