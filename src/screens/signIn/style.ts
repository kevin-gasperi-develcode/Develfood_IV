import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: white;
  flex: 1;
`
export const ImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const ViewInputComponents = styled.View`
  align-items: center;
  z-index: 1;
`
export const ViewInputs = styled.View`
  margin-top: ${RFValue(25)}px;
  padding: 0 ${RFValue(40)}px;
  width: ${RFValue(100)}%;
`
export const TextSenha = styled.Text`
  height: 14px;
  align-self: flex-end;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  margin-top: 12px;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.colors.input_focus};
`

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  width: 295px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`
