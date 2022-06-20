import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View`
  background-color: white;
  flex: 1;
`
export const ImageCheese = styled.Image`
  height: ${RFValue(300)}px;
  width: ${RFValue(100)}px;
  position: absolute;
  left: 0;
`
export const ImagePizza = styled.Image`
  height: ${RFValue(380)}px;
  width: ${RFValue(150)}px;
  position: absolute;
  right: 0;
`
export const ImageDevelfood = styled.Image`
  height: ${RFValue(60)}px;
  width: ${RFValue(200)}px;
`
export const ImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const ViewInputComponents = styled.View`
  align-items: center;
  margin-top: ${RFValue(250)}px;
`
export const ViewInputs = styled.View`
  margin-top: ${RFValue(25)}px;
  padding: 0 ${RFValue(40)}px;
  width: ${RFValue(100)}%;
`
export const TextSenha = styled.Text`
  height: ${RFValue(14)}px;
  align-self: flex-end;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14)}px;
  margin-top: ${RFValue(12)}px;
  margin-bottom: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.input_focus};
`

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  width: ${RFValue(295)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`
export const TextRegister = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(10)}px;
  align-self: flex-end;
`
export const TextRegisterRed = styled.Text`
  color: ${theme.colors.background_red};
  position: absolute;
  font-size: ${RFValue(14)}px;
`

export const ImageRedDust = styled.Image`
  width: ${RFValue(350)}px;
  height: ${RFValue(200)}px;
  align-self: center;
`
