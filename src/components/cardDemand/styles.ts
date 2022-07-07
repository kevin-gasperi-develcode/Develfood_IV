import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View.attrs({ elevation: 6 })`
   width: 99%;
   height: ${RFValue(103)}px;
   border-radius: ${RFValue(8)}px;
   background-color: ${theme.colors.background_gray};
   margin-top: ${RFValue(20)}px;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const ViewImage = styled.View`
   align-items: flex-start;
   height: ${RFValue(70)}px;
   width: 15%;
`;

export const ImageRestaurant = styled.Image`
   width: ${RFValue(34)}px;
   height: ${RFValue(34)}px;
`;

export const ViewInfo = styled.View`
   align-items: flex-start;
   height: ${RFValue(70)}px;
   width: 75%;
   justify-content: space-between;
`;

export const ViewStatus = styled.View`
   flex-direction: row;
   align-items: flex-start;
   align-items: center;
`;

export const Title = styled.Text`
   line-height: ${RFValue(14)}px;
   font-weight: 400;
   color: ${theme.colors.text_dark};
`;

export const Description = styled.Text`
   line-height: ${RFValue(12)}px;
   font-weight: 700;
   color: ${theme.colors.text_gray};
`;

export const CheckImg = styled.Image`
   width: ${RFValue(14)}px;
   height: ${RFValue(14)}px;
`;
export const OrderStatus = styled.Text`
   margin-left: ${RFValue(4)}px;
   line-height: ${RFValue(12)}px;
   font-weight: 600;
   color: ${theme.colors.text_gray};
`;
export const OrderNumber = styled.Text`
   margin-left: ${RFValue(4)}px;
   line-height: ${RFValue(12)}px;
   font-weight: 600;
   color: ${theme.colors.text_gray};
`;
