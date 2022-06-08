import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${RFValue(150)}px;
`
export const ImageBanner = styled.Image`
  height: ${RFValue(120)}px;
  width: ${RFValue(340)}px;
  margin: ${RFValue(6)}px;
`
export const ViewCircles = styled.View`
  align-items: center;
`
export const ViewCirclesGroup = styled.View`
  flex-direction: row;
`
export const ImageCircle = styled.Image`
  margin: ${RFValue(6)}px;
`
