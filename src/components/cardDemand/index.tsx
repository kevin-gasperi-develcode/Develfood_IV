import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth';
import theme from '../../global/theme';
import { useGet } from '../../services';
import {
   CheckImg,
   Container,
   Description,
   ImageRestaurant,
   OrderNumber,
   OrderStatus,
   Title,
   ViewImage,
   ViewInfo,
   ViewStatus,
} from './styles';

interface CardDemandProps {
   name: string;
   id: number;
   status: string;
   quantityAndName: string[];
   image: string;
   date: string;
}
interface ImageProps {
   id: number;
   code: string;
}
export function CardDemand({
   name,
   id,
   status,
   quantityAndName,
   image,
}: CardDemandProps) {
   const checkOrder = require('../../assets/icons/check_order.png');
   const { authState } = useAuth();

   const { data: dataImage, fetchData: fetchImage } =
      useGet<ImageProps>(
         image,
         {
            headers: {
               Authorization: `Bearer ${authState.token}`,
            },
         },
         printSuccess,
      );
   useEffect(() => {
      fetchImage();
   }, [image]);

   function printSuccess(dataImage: ImageProps) {
      const ImageRestaurant = dataImage.code;
      return ImageRestaurant;
   }

   return (
      <Container>
         <ViewImage>
            <ImageRestaurant
               source={
                  dataImage.code
                     ? { uri: dataImage.code }
                     : theme.icons.restaurant_without_img
               }
            />
         </ViewImage>
         <ViewInfo>
            <Title>{name}</Title>
            <ViewStatus>
               <CheckImg source={checkOrder} />
               <OrderStatus>
                  {status.charAt(0).toUpperCase() +
                     status
                        .slice(1)
                        .toLowerCase()
                        .replace('_', ' ')
                        .replace('_', ' ')}{' '}
               </OrderStatus>
               <OrderNumber>N° {id}</OrderNumber>
            </ViewStatus>
            <Description numberOfLines={2}>
               {quantityAndName}
            </Description>
         </ViewInfo>
      </Container>
   );
}
