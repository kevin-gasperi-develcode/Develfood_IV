import React from 'react';
import { HeaderStandard } from '../../components/headerStandard';
import { Container } from '../signIn/style';
import { ImageNoOrders, TextNoOrders, ViewNoOrders } from './styles';

export default function Demand() {
   const withOrder = false;
   const noOrdersImg = require('../../assets/images/no_orders.png');
   return (
      <>
         <HeaderStandard backGround="red" title="Meus Pedidos" />
         {withOrder ? (
            <Container></Container>
         ) : (
            <ViewNoOrders>
               <ImageNoOrders source={noOrdersImg} />
               <TextNoOrders>Você ainda não fez nenhum pedido</TextNoOrders>
            </ViewNoOrders>
         )}
      </>
   );
}

// request/costumer?page=0&quantity=10    <<<<< Request para pegar os pedidos
