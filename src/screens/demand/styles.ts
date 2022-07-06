import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
   flex: 1;
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
