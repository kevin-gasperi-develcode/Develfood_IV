import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: white;
  flex: 1;
`

export const ImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const InputTextLogin = styled.TextInput`
  width: 295px;
  height: 50px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.icon_gray};
  justify-content: center;
  border-radius: 10px;
`
export const ViewInput = styled.View`
  align-items: center;
  /* padding: 0 32px; */
`

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  width: 295px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10;
  /* padding: 0 32px; */
`
