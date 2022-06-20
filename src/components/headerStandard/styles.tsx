import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
  flex-direction: row;
  height: ${RFValue(56)}px;
`
export const BackButtonContainer = styled.TouchableOpacity`
  height: ${RFValue(56)}px;
  width: ${RFValue(80)}px;
`
export const ImageGoBack = styled.Image`
  height: ${RFValue(24)}px;
  width: ${RFValue(24)}px;
  position: absolute;
  margin-left: ${RFValue(20)}px;
  margin-top: ${RFValue(11)}px;
`
export const TextContainer = styled.View`
  width: ${RFValue(215)}px;
  align-items: center;
  justify-content: center;
`
export const TextTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16.4)}px;
  color: ${theme.colors.text_white};
`
export const RightImageContainer = styled.TouchableOpacity`
  position: absolute;
  height: ${RFValue(56)}px;
  width: ${RFValue(80)}px;
  right: ${RFValue(0)}px;
`
export const ImageRight = styled.Image`
  position: absolute;
  height: ${RFValue(17.6)}px;
  width: ${RFValue(20)}px;
  right: ${RFValue(20)}px;
  margin-top: ${RFValue(20)}px;
`
