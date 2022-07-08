import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
   flex: 1;
   padding: ${RFValue(16)}px;
`;
export const ViewNoOrders = styled.View`
   flex: 1;
   background-color: ${theme.colors.background};
`;
export const ImageNoOrders = styled.Image`
   width: ${RFValue(350)}px;
   height: ${RFValue(352)}px;
   margin-top: ${RFValue(16)}px;
   align-self: center;
`;
export const TextNoOrders = styled.Text`
   color: ${theme.colors.text_dark};
   font-weight: 400;
   font-size: ${RFValue(18)}px;
   align-self: center;
   margin-top: ${RFValue(-36)}px;
   line-height: ${RFValue(21)}px;
`;
export const TextTitle = styled.Text`
   margin-top: ${RFValue(16)}px;
   font-weight: 400;
   font-size: ${RFValue(22)}px;
   line-height: ${RFValue(26)}px;
   color: ${theme.colors.text_dark};
`;
export const TextDate = styled.Text`
   font-size: ${RFValue(12)}px;
   line-height: ${RFValue(14.06)}px;
   font-weight: 400;
   color: ${theme.colors.text_gray};
`;
export const TextDateCard = styled.Text`
   margin-top: ${RFValue(8)}px;
   margin-bottom: ${RFValue(-5)}px;
`;
export const ViewLoading = styled.View`
   width: 100%;
   height: ${RFValue(80)}px;
   justify-content: center;
`;
