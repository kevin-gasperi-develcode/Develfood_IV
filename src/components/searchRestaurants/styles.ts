import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View``
export const ContainerScroll = styled.View`
  height: ${RFValue(64)}px;

  flex-direction: row;
  align-items: center;
`
export const ViewBanner = styled.View`
  background-color: ${theme.colors.background_red};
  height: ${RFValue(28)}px;
  width: ${RFValue(99)}px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: ${RFValue(4)}px;
`
export const TextBanner = styled.Text`
  color: white;
  font-weight: 700;
`

export const InputRestaurants = styled.View`
  height: ${RFValue(50)}px;
  width: ${RFValue(339)}px;
  border: ${RFValue(1)}px;
  border-color: #bfbaba;
  border-radius: 10px;
  align-self: center;
`
export const ImageSearch = styled.Image`
  margin-left: ${RFValue(13)}px;
  margin-right: ${RFValue(13)}px;
`
