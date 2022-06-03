import React, { useContext, useEffect, useState } from 'react'
import { Alert, Button, FlatList, StatusBar, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { BannerHomeCategories } from '../../components/bannerHomeCategories'
import { BannerHomeImage } from '../../components/bannerHomeImages'
import { CardRestaurant } from '../../components/cardRestaurant'
import { HeaderAddress } from '../../components/headerAddress'
import { SearchRestaurants } from '../../components/searchRestaurants'
import theme from '../../global/theme'
import { useGet } from '../../services'
import { FlatListMod, TitleCategories } from './styles'
import { useAuth } from '../../context/auth'

interface ApiData {
  content: [
    {
      id: number
      name: string
      photo_url: string
    },
  ]
}

export function Home() {
  const [page, setPage] = useState(0)
  const [dataRestaurants, setDataRestaurants] = useState([])
  const { authState } = useAuth()

  useEffect(() => {}, [])

  const { data, loading, error } = useGet<ApiData>(
    `/restaurant?page=${page}&quantity=10`,
    {
      headers: {
        Authorization: ` Bearer ${authState.token}`,
      },
    },
    dataReturn,
  )

  function dataReturn(response: any) {
    setDataRestaurants([...dataRestaurants, ...response.content] as never)
  }

  return (
    <>
      <StatusBar
        barStyle={'default'}
        backgroundColor={theme.colors.background_red}
      />
      <HeaderAddress />
      <BannerHomeImage />
      <TitleCategories>Categorias</TitleCategories>
      <BannerHomeCategories />
      <SearchRestaurants />

      <FlatListMod
        numColumns={2}
        data={dataRestaurants}
        renderItem={({ item }: any) => (
          <CardRestaurant dataImage={item.image} name={item.name} />
        )}
      />
    </>
  )
}

// Implementar listagem de restaurantes utilizando informações passadas pela api.

// Link do figma: Devel team library
// Endpoint: https://develfood-3.herokuapp.com/restaurant?page=0&quantity=10

// Considerações:

// Lista de restaurantes deve ter lógica para trazer mais restaurantes quando usuário chega no final da lista. links de apoio: React Native #9: Load More FlatList ,Criando Infinite Scroll com React Native | FlatList

// Enquanto o fetch da lista é feito, deve haver um loading sendo mostrado na tela, isso vale tanto para o primeiro fetch, como para o fetch da paginação.

// Quando um restaurante não possui imagem, uma imagem genérica deve ser colocada, como mostrado no figma

// A funcionalidade de favoritos não precisa ser desenvolvida agora, bastando apenas a estilização do coração no card do restaurante.

// function handlerGet() {
//   const { data, loading, error } = useGet<UserData[]>('/user', undefined)
//   console.log(data)
// }

// const {
//   data: dataPut,
//   handlerPut,
//   loading: loadingPut,
//   error: errorPut,
// } = usePut<Data, DataPost>(
//   '/public/v2/users/5752',
//   {
//     name: 'Kevin V',
//     email: 'kevin@develcode2026.com',
//     gender: 'male',
//     status: 'active',
//   },
//   {
//     headers: {
//       'Content-type': 'application/json',
//       Authorization:
//         'Bearer 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4',
//     },
//   },
// )

// const {
//   data: dataDelete,
//   handlerDelete,
//   loading: loadingDelete,
//   error: errorDelete,
// } = useDelete('/public/v2/users/5758', {
//   headers: {
//     'Content-type': 'application/json',
//     Authorization:
//       'Bearer 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4',
//   },
// })

// interface DataPost {
//   name: string
//   email: string
//   gender: string
//   status: string
// }
// interface Data {
//   name: string
//   email: string
//   gender: string
//   status: string
// }
// interface UserData {
//   email: string
//   password: string
//   creationDate: string
//   role: {
//     id: 2
//   }
//   costumer: {
//     firstName: string
//     lastName: string
//     cpf: string
//     phone: string
//     photo: string
//     address: [
//       {
//         street: string
//         number: string
//         neighborhood: string
//         city: string
//         zipCode: string
//         state: string
//         nickname: string
//       },
//     ]
//   }
// }

{
  /* <Button title={'get'} onPress={() => handlerGet()} />
      <Button title={'put'} onPress={() => handlerPut()} />
      <Button title={'delete'} onPress={() => handlerDelete()} /> */
}

// Envio da foto

// "photo_url": url_api/photo/{id}

// {
//   "email": "nespimospa@vusra.com",
//   "password": "123456",
//   "creationDate": "2022-05-02",
//   "role": {
//       "id":2
//   },
//  "costumer": {
//          "firstName": "firstName",
//          "lastName": "lastName",
//          "cpf": "234.567.434-05",
//          "phone": "(12)997485733",
//          "photo": {
//              "code": ""
//          },
//          "address":[ {
//                      "street": "Rua Alemanha",
//                      "number": "34",
//                      "neighborhood": "Jardim das Nações",
//                      "c
