import React from 'react'
import { Button, FlatList, StatusBar, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { BannerHomeCategories } from '../../components/bannerHomeCategories'
import { BannerHomeImage } from '../../components/bannerHomeImages'
import { CardRestaurant } from '../../components/cardRestaurant'
import { HeaderAddress } from '../../components/headerAddress'
import { SearchRestaurants } from '../../components/searchRestaurants'
import theme from '../../global/theme'
import { useGet } from '../../services'
import { FlatListMod, TitleCategories } from './styles'

export function Home() {
  function handlerGet() {
    const { data, loading, error } = useGet('/restaurant?page=0&quantity=10')
    console.log(data)
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
      <SearchRestaurants onTouch={handlerGet} />

      {/* <FlatListMod
      data={}
      renderItem={({data}) => }
      /> */}

      <CardRestaurant />
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
