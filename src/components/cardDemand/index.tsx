import React from 'react';
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

export function CardDemand({
   name,
   quantityAndName,
   image,

   status,
}: CardDemandProps) {
   const checkOrder = require('../../assets/icons/check_order.png');
   return (
      <Container>
         <ViewImage>
            <ImageRestaurant source={checkOrder} />
         </ViewImage>
         <ViewInfo>
            <Title>{name}</Title>
            <ViewStatus>
               <CheckImg source={checkOrder} />
               <OrderStatus>{status}</OrderStatus>
               <OrderNumber>{}</OrderNumber>
            </ViewStatus>
            <Description numberOfLines={2}>{quantityAndName}</Description>
         </ViewInfo>
      </Container>
   );
}
