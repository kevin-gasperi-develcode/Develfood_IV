import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const InputRestaurants = styled.View`
  align-self: center;
  height: ${RFValue(50)}px;
  width: 100%;
  border: ${RFValue(1.4)}px;
  border-color: #bfbaba;
  border-radius: 10px;
  flex-direction: row;
`
export const ImageSearch = styled.Image`
  margin-left: ${RFValue(17)}px;
  margin-top: ${RFValue(17)}px;
  margin-right: ${RFValue(13.79)}px;
`
export const ViewSearch = styled.View``
export const TextInputMod = styled.TextInput`
  width: ${RFValue(285)}px;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16.41)}px;
  width: 80%;
`
