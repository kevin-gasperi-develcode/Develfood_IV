import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
`
export const BackButton = styled.TouchableOpacity`
  height: 24px;
  height: 24px;
`
export const TextTitle = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
`
export const ImageGoBack = styled.Image`
  position: absolute;
  margin-top: ${RFValue(23)}px;
  margin-left: ${RFValue(20)}px;
`
