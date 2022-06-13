import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View.attrs({ elevation: 10 })`
  width: 100%;
  height: ${RFValue(103)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${theme.colors.background};
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
`
export const ImageFood = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(82)}px;
  border-radius: ${RFValue(10)}px;
  margin-top: 10px;
  margin-left: 10px;
`
export const ViewFood = styled.View`
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;
  width: 60%;
`
export const Tittle = styled.Text`
  width: 100%;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16.41)}px;
  color: ${theme.colors.header};
  margin-bottom: ${RFValue(4)}px;
`
export const Description = styled.Text`
  height: ${RFValue(36)}px;
  font-weight: 400;
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(11.72)}px;
  color: ${theme.colors.icon_gray};
`
export const TextPrice = styled.Text`
  font-weight: 700;
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(14)}px;
  line-height: ${RFValue(14.06)}px;
  color: ${theme.colors.text_dark};
`
export const Wrapper = styled.View`
  flex-direction: row;
`
export const TextButton = styled.Text`
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.background_red};
`
export const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(8)}px;
  margin-top: ${RFValue(6)}px;
`
