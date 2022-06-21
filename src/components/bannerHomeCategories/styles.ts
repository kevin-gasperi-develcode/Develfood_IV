import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const ContainerScroll = styled.View`
  height: ${RFValue(64)}px;

  flex-direction: row;
  align-items: center;
`
export const ViewBanner = styled.TouchableOpacity`
  background-color: ${theme.colors.background_red};
  height: ${RFValue(28)}px;
  width: ${RFValue(99)}px;
  border-radius: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
  margin: ${RFValue(4)}px;
`
export const TextBanner = styled.Text`
  color: white;
  font-weight: 700;
`
