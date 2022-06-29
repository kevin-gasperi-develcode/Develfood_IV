import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
  background-color: white;
  padding: 0 ${RFValue(21)}px;
  flex: 1;
`
export const TextMeusItens = styled.Text`
  align-self: center;
  color: ${theme.colors.icon_dark};
  font-weight: 400;
  font-size: ${RFValue(20)}px;
`
export const FlatListmodified = styled.FlatList`
  background-color: ${theme.colors.background_gray};
  right: ${RFValue(0)}px;
  border-top-left-radius: 100px;
`
