import styled from 'styled-components/native'

export const Container = styled.View`
  width: 295px;
  height: 50px;
  border: 1.5px;
  border-color: ${({ theme }) => theme.colors.icon_gray};
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 12px;
`
export const ImageView = styled.Image`
  width: 20px;
  height: 18px;
  left: 16px;
  margin-right: 20px;
`
export const EyeView = styled.TouchableOpacity`
  position: absolute;
  width: 20px;
  height: 18px;
  left: 258px;
  margin-right: 20px;
`
export const EyeImage = styled.Image<{ hidePassword: boolean }>`
  tint-color: ${({ hidePassword }) => (hidePassword ? 'grey' : 'red')};
`
