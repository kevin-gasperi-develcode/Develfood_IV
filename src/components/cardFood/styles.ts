import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled.View.attrs({ elevation: 6 })`
   width: 99%;
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
   font-size: ${RFValue(15)}px;
   line-height: ${RFValue(16.41)}px;
   color: ${theme.colors.header};
`
export const Description = styled.Text`
   height: ${RFValue(36)}px;
   padding-top: ${RFValue(3)}px;
   font-weight: 400;
   font-size: ${RFValue(13.3)}px;
   line-height: ${RFValue(11.72)}px;
   color: ${theme.colors.icon_gray};
`
export const TextPrice = styled.Text`
   font-weight: 700;
   font-size: ${RFValue(14)}px;
   margin-top: ${RFValue(14)}px;
   line-height: ${RFValue(14.06)}px;
   color: ${theme.colors.text_dark};
`
export const Wrapper = styled.View`
   flex-direction: row;
`
export const TextButton = styled.Text`
   font-weight: 500;
   font-size: ${RFValue(15)}px;
   line-height: ${RFValue(16)}px;
   color: ${theme.colors.background_red};
`
export const AddButton = styled.TouchableOpacity`
   position: absolute;
   right: ${RFValue(8)}px;
   margin-top: ${RFValue(6)}px;
`
export const ViewItems = styled.View`
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   width: ${RFValue(72)}px;
   height: ${RFValue(32)}px;
   position: absolute;
   right: ${RFValue(8)}px;
   margin-top: ${RFValue(6)}px;
`
export const TouchableOpacityItem = styled.TouchableOpacity`
   width: ${RFValue(16)}px;
   height: ${RFValue(24)}px;
`
export const ImageTrash = styled.Image`
   width: ${RFValue(15.84)}px;
   height: ${RFValue(18)}px;
`
export const ViewNumberItem = styled.View`
   background-color: ${theme.colors.background_red};
   width: ${RFValue(24)}px;
   height: ${RFValue(24)}px;
   border-radius: ${RFValue(4)}px;
   align-items: center;
   justify-content: center;
`

export const TextNumberItem = styled.Text`
   color: ${theme.colors.icon_white};
   font-weight: 700;
   font-size: ${RFValue(13)}px;
`

export const ImageAddRem = styled.Image`
   width: ${RFValue(10)}px;
   height: ${RFValue(18)}px;
`
export const TouchableRemoveItem = styled.TouchableOpacity`
   background-color: ${theme.colors.background_red};
   border-radius: ${RFValue(10)}px;
   width: ${RFValue(100)}px;
   height: ${RFValue(103)}px;
`
export const ImageTrashSwipe = styled.Image`
   position: absolute;
   align-self: center;
   width: ${RFValue(16)}px;
   height: ${RFValue(16)}px;
   top: ${RFValue(36)}px;
`
export const TextRemove = styled.Text`
   position: absolute;
   color: ${theme.colors.icon_white};
   align-self: center;
   top: ${RFValue(54)}px;
`

export const ContainerSwipeable = styled.View`
   width: 100%;
   height: ${RFValue(103)}px;
   border-radius: 8px;
   background-color: ${theme.colors.background};
   flex-direction: row;
`
export const ViewSwipeable = styled.View.attrs({ elevation: 6 })`
   height: ${RFValue(103)}px;
   width: 98%;
   background-color: ${({ theme }) => theme.colors.background_red};
   margin-top: ${RFValue(18)}px;
   border-radius: 8px;
`
