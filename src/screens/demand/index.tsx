import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import { CardDemand } from '../../components/cardDemand';
import { HeaderStandard } from '../../components/headerStandard';
import { useAuth } from '../../context/auth';
import { useGet } from '../../services';
import {
   Container,
   ImageNoOrders,
   TextDateCard,
   TextNoOrders,
   TextTitle,
   ViewNoOrders,
} from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';
import { ViewLoading } from './styles';
import { Load } from '../../components/load';

interface DemandResponse {
   content: ContentProps[];
}
interface ContentProps {
   id: number;
   costumer: string;
   restaurant: Restaurant;
   date: string;
   dateLastUpdated: string;
   totalValue: number;
   paymentType: string;
   status: string;
   requestItems: requestItemsProps[];
}
interface Restaurant {
   id: number;
   name: string;
   photo_url: string;
   food_types: FoodTypesProps[];
}
interface FoodTypesProps {
   id: number;
   name: string;
}
interface requestItemsProps {
   id: number;
   plateDTO: plateDTOProps;
   quantity: number;
   price: number;
   observation: string;
}
interface plateDTOProps {
   id: number;
   name: string;
   description: string;
   price: number;
   foodType: foodTypeProps;
   restaurantName: string;
   photo_url: string;
}
interface foodTypeProps {
   id: string;
   name: string;
   photo_url: string;
}
interface SectionListData {
   title: string;
   data: ContentProps[];
}
interface Filter {
   page: number;
}
export default function Demand() {
   const withOrder = true;
   const noOrdersImg = require('../../assets/images/no_orders.png');

   const { authState } = useAuth();
   const [filter, setFilter] = useState<Filter>({
      page: 0,
   });

   const {
      fetchData: fetchDataDemand,
      data: dataDemand,
      loading,
   } = useGet<DemandResponse>(
      `request/costumer?page=${filter.page}&quantity=10`,
      {
         headers: {
            Authorization: ` Bearer ${authState.token}`,
         },
      },
      onSuccessDemand,
   );

   function onSuccessDemand(data?: DemandResponse) {
      setOrders([...orders, ...(data?.content as ContentProps[])]);
   }
   useEffect(() => {
      fetchDataDemand();
   }, [filter.page]);

   const [historicSections, setHistoricSections] = useState<
      SectionListData[]
   >([]);
   const [orders, setOrders] = useState<ContentProps[]>([]);

   useEffect(() => {
      dataDemand?.content &&
         sectionDataFormatter([...orders, ...dataDemand?.content]);
   }, [dataDemand]);

   function sectionDataFormatter(data: ContentProps[]) {
      const historicFormatted: SectionListData[] = [];
      data.forEach((order: ContentProps) => {
         const sectionFound = historicFormatted.find(
            (historicSections: SectionListData) =>
               historicSections.title === order.date,
         );
         if (sectionFound) {
            sectionFound.data.push(order);
         } else {
            historicFormatted.push({
               title: order.date,
               data: [order],
            });
         }
      });
      setHistoricSections(historicFormatted);
   }

   const listItems = (item: ContentProps) => {
      let quantityVisible = item.requestItems.map(
         (requestItem: requestItemsProps, index) => {
            if (requestItem.quantity > 1) {
               return index != 0
                  ? ' + ' +
                       requestItem.quantity +
                       ' ' +
                       requestItem.plateDTO.name
                  : requestItem.quantity +
                       ' ' +
                       requestItem.plateDTO.name;
            } else {
               return index != 0
                  ? ' + ' + requestItem?.plateDTO.name
                  : requestItem?.plateDTO.name;
            }
         },
      );

      return quantityVisible;
   };

   async function endReached() {
      setFilter({ ...filter, page: filter.page + 1 });
   }

   return (
      <>
         <HeaderStandard backGround="red" title="Meus Pedidos" />
         {withOrder ? (
            <Container>
               <SectionList
                  ListHeaderComponent={
                     <TextTitle>Histórico</TextTitle>
                  }
                  sections={historicSections}
                  onEndReached={endReached}
                  renderSectionHeader={({
                     section: { title },
                  }: any) => (
                     <TextDateCard>
                        {moment(title).format('llll').slice(0, -9)}
                     </TextDateCard>
                  )}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item: any) => item?.id}
                  renderItem={({ item }: any) => (
                     <>
                        <CardDemand
                           name={item.restaurant.name}
                           status={item.status}
                           image={item.restaurant.photo_url}
                           id={item.id}
                           date={item.date}
                           quantityAndName={listItems(item)}
                        />
                     </>
                  )}
                  ListFooterComponent={() => (
                     <ViewLoading>
                        {loading ? <Load /> : null}
                     </ViewLoading>
                  )}
               />
            </Container>
         ) : (
            <ViewNoOrders>
               <ImageNoOrders source={noOrdersImg} />
               <TextNoOrders>
                  Você ainda não fez nenhum pedido
               </TextNoOrders>
            </ViewNoOrders>
         )}
      </>
   );
}
