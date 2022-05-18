import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: gray;
`
