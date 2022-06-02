import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const ViewImage = styled.Image`
  width: ${RFValue(212)}px;
  height: ${RFValue(232)}px;
  margin-top: ${RFValue(89)}px;
`
export const Content = styled.View`
  align-items: center;
  width: 100%;
`
export const Wrapper = styled.View`
  width: ${RFValue(273)}px;
  margin-top: ${RFValue(30)}px;
`
export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  width: ${RFValue(273)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_dark};
`
export const SubTitle = styled.Text`
  height: ${RFValue(42)}px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_gray};
  font-weight: bold;
  margin-bottom: ${RFValue(80)}px;
`
