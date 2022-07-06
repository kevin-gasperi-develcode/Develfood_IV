import React from 'react';
import { longPressGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler';
import { HeaderStandard } from '../../components/headerStandard';
import { useAuth } from '../../context/auth';
import { useGet } from '../../services';
import { Container } from '../signIn/style';
import { ImageNoOrders, TextNoOrders, ViewNoOrders } from './styles';

interface userId {
   id: number;
}

export default function Demand() {
   const withOrder = true;
   const noOrdersImg = require('../../assets/images/no_orders.png');
   const { authState } = useAuth();

   const { fetchData: fetchDataId, data: dataId } = useGet<userId>('/auth', {
      headers: {
         Authorization: ` Bearer ${authState.token}`,
      },
   });

   // const { fetchData: fetchDataDemand, data: dataDemand } = useGet<any>(
   //    `/request/costumer?id=${userId}&page=${page}&quantity=20`, {
   //    headers: {
   //       Authorization: ` Bearer ${authState.token}`,
   //    },
   // });
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

/* 
{
    "content": [
        {
            "id": 743,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 30.00,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1147,
                    "plateDTO": {
                        "id": 201,
                        "name": "Bolo de Chocolate",
                        "description": "Bolo de chocolate com cobertura de brigadeiro.",
                        "price": 30.00,
                        "foodType": {
                            "id": 4,
                            "name": "DOCE"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/967"
                    },
                    "quantity": 1,
                    "price": 30.00,
                    "observation": ""
                }
            ]
        },
        {
            "id": 742,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 30.00,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1146,
                    "plateDTO": {
                        "id": 201,
                        "name": "Bolo de Chocolate",
                        "description": "Bolo de chocolate com cobertura de brigadeiro.",
                        "price": 30.00,
                        "foodType": {
                            "id": 4,
                            "name": "DOCE"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/967"
                    },
                    "quantity": 1,
                    "price": 30.00,
                    "observation": ""
                }
            ]
        },
        {
            "id": 741,
            "costumer": null,
            "restaurant": {
                "id": 6,
                "name": "Bar dos cria",
                "photo_url": "https://develfood-3.herokuapp.com/photo/3",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 40.56,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1145,
                    "plateDTO": {
                        "id": 43,
                        "name": "Yakisoba",
                        "description": "Yakisoba",
                        "price": 40.56,
                        "foodType": {
                            "id": 4,
                            "name": "DOCE"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/401"
                    },
                    "quantity": 1,
                    "price": 40.56,
                    "observation": ""
                }
            ]
        },
        {
            "id": 740,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 150.89,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1144,
                    "plateDTO": {
                        "id": 46,
                        "name": "cPicanha na brasa",
                        "description": "Picanha na brasa",
                        "price": 150.89,
                        "foodType": {
                            "id": 3,
                            "name": "ITALIANA"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/402"
                    },
                    "quantity": 1,
                    "price": 150.89,
                    "observation": ""
                }
            ]
        },
        {
            "id": 739,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 30.00,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1143,
                    "plateDTO": {
                        "id": 201,
                        "name": "Bolo de Chocolate",
                        "description": "Bolo de chocolate com cobertura de brigadeiro.",
                        "price": 30.00,
                        "foodType": {
                            "id": 4,
                            "name": "DOCE"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/967"
                    },
                    "quantity": 1,
                    "price": 30.00,
                    "observation": ""
                }
            ]
        },
        {
            "id": 738,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 55.55,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1142,
                    "plateDTO": {
                        "id": 222,
                        "name": "Pizza",
                        "description": "pizza",
                        "price": 55.55,
                        "foodType": {
                            "id": 2,
                            "name": "PIZZA"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/1004"
                    },
                    "quantity": 1,
                    "price": 55.55,
                    "observation": ""
                }
            ]
        },
        {
            "id": 737,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 40.56,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1141,
                    "plateDTO": {
                        "id": 43,
                        "name": "Yakisoba",
                        "description": "Yakisoba",
                        "price": 40.56,
                        "foodType": {
                            "id": 4,
                            "name": "DOCE"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/401"
                    },
                    "quantity": 1,
                    "price": 40.56,
                    "observation": ""
                }
            ]
        },
        {
            "id": 736,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 45.50,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1140,
                    "plateDTO": {
                        "id": 49,
                        "name": "Hamburger Gourmet",
                        "description": "Pão de brioche, hamburguer artesanal de 180g, maionese especial e queijo prato derretido",
                        "price": 45.50,
                        "foodType": {
                            "id": 1,
                            "name": "FASTFOOD"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/387"
                    },
                    "quantity": 1,
                    "price": 45.50,
                    "observation": ""
                }
            ]
        },
        {
            "id": 735,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 45.50,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1139,
                    "plateDTO": {
                        "id": 49,
                        "name": "Hamburger Gourmet",
                        "description": "Pão de brioche, hamburguer artesanal de 180g, maionese especial e queijo prato derretido",
                        "price": 45.50,
                        "foodType": {
                            "id": 1,
                            "name": "FASTFOOD"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/387"
                    },
                    "quantity": 1,
                    "price": 45.50,
                    "observation": ""
                }
            ]
        },
        {
            "id": 732,
            "costumer": null,
            "restaurant": {
                "id": 1,
                "name": "Vinicius's Bar",
                "photo_url": "https://develfood-3.herokuapp.com/photo/1",
                "food_types": [
                    {
                        "id": 1,
                        "name": "FASTFOOD"
                    },
                    {
                        "id": 2,
                        "name": "PIZZA"
                    },
                    {
                        "id": 3,
                        "name": "ITALIANA"
                    },
                    {
                        "id": 4,
                        "name": "DOCE"
                    }
                ]
            },
            "date": "2022-07-06 00:00:00",
            "dateLastUpdated": "2022-07-06 00:00:00",
            "totalValue": 80.90,
            "paymentType": "card",
            "status": "PEDIDO_REALIZADO",
            "requestItems": [
                {
                    "id": 1126,
                    "plateDTO": {
                        "id": 48,
                        "name": "Pizza de Peperoni",
                        "description": "Pizza de Peperoni",
                        "price": 80.90,
                        "foodType": {
                            "id": 2,
                            "name": "PIZZA"
                        },
                        "restaurantName": "Vinicius's Bar",
                        "photo_url": "https://develfood-3.herokuapp.com/photo/403"
                    },
                    "quantity": 1,
                    "price": 80.90,
                    "observation": ""
                }
            ]
        }
    ],
    "pageable": {
        "sort": {
            "sorted": false,
            "empty": true,
            "unsorted": true
        },
        "pageNumber": 0,
        "pageSize": 10,
        "offset": 0,
        "paged": true,
        "unpaged": false
    },
    "last": false,
    "totalPages": 2,
    "totalElements": 20,
    "sort": {
        "sorted": false,
        "empty": true,
        "unsorted": true
    },
    "first": true,
    "size": 10,
    "number": 0,
    "numberOfElements": 10,
    "empty": false
}


*/
