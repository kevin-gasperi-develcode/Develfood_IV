import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

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
  /* margin-top: ${RFValue(-120)}px; */
  height: ${RFValue(60)}px;
  width: ${RFValue(200)}px;
`
export const ImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const ViewInputComponents = styled.View`
  align-items: center;
  /* z-index: 1; */
  margin-top: ${RFValue(250)}px;
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

export const ImageRedDust = styled.Image`
  width: ${RFValue(350)}px;
  height: ${RFValue(200)}px;
  align-self: center;
`
