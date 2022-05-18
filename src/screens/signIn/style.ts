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
  width: 375px;
  height: 280px;
  margin-bottom: 12px;
`
export const ViewInputs = styled.View`
  width: 296px;
  height: 210px;
  margin-top: 12px;
`
export const TextSenha = styled.Text`
  font-family: 'Roboto';
  width: 115px;
  height: 14px;
  align-self: flex-end;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  margin-top: 12px;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.colors.input_focus};
`
export const InputTextLogin = styled.TextInput`
  width: 295px;
  height: 50px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.icon_gray};
  justify-content: center;
  border-radius: 10px;
`

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  width: 295px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`
