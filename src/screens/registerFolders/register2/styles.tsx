import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const ViewInputs = styled.View`
  margin-top: ${RFValue(25)}px;
  padding: 0 ${RFValue(40)}px;
`
