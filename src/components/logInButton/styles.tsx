import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.button};
  width: 295px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  font-size: 16px;
  line-height: 16px;
`
