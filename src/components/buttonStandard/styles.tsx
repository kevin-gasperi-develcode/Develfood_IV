import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.button};
  z-index: 1;
`

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_white};
`
