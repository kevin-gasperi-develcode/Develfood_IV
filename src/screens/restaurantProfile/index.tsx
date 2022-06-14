import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDebouncedCallback } from 'use-debounce'
import { CardFood } from '../../components/cardFood'
import { HeaderStandard } from '../../components/headerStandard'
import { Load } from '../../components/load'
import { RestaurantInfo } from '../../components/restaurantInfo'
import { SearchFood } from '../../components/searchFood'
import { useAuth } from '../../context/auth'
import theme from '../../global/theme'
import { useGet } from '../../services'
import {
  Container,
  ImageNotFound,
  TextNotFound,
  TextPratos,
  ViewLoading,
} from './styles'
interface RestaurantFood {
  id: number
  description: string
  price: number
  foodType: {
    id: number
    name: string
  }
  restaurantName: string
  photo_url: string
}
;[]

export function RestaurantProfile({ route }: any) {
  const { id, name, photo_url } = route.params
  const [filter, setFilter] = useState({ text: '' })
  const [dataFood, setDataFood] = useState<RestaurantFood[]>([])
  const { authState } = useAuth()

  const { loading, fetchData } = useGet<RestaurantFood[]>(
    `plate/search?name=${filter.text}&restaurantid=${id}`,
    { headers: { Authorization: ` Bearer ${authState.token}` } },
    dataReturn,
  )
  useEffect(() => {
    ;(async () => await fetchData())()
  }, [filter.text])

  function dataReturn(response: RestaurantFood[]) {
    setDataFood([...dataFood, ...response])
    console.log('dataCompleto', response)
  }

  const debounced = useDebouncedCallback((text) => {
    handleSearch(text)
  }, 1500)

  function handleSearch(text: string) {
    if (text.length > 1) {
      setDataFood([])
      setFilter({ text: text })
    } else setDataFood([]), setFilter({ text: '' })
  }

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <HeaderStandard
        goBackButton={theme.icons.back_button}
        imageRight={theme.icons.favorite_white}
        title={'Restaurantes'}
      />

      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            loading ? null : (
              <>
                <ImageNotFound source={theme.icons.not_found} />
                <TextNotFound>Nenhum prato encontrado</TextNotFound>
              </>
            )
          }
          ListFooterComponent={() => (
            <ViewLoading>{loading ? <Load /> : null}</ViewLoading>
          )}
          ListHeaderComponent={
            <>
              <RestaurantInfo
                nameRestaurant={name}
                imageRestaurant={photo_url}
              />
              <TextPratos>Pratos</TextPratos>
              <SearchFood
                nameRestaurant={name}
                textChange={(text) => debounced(text)}
              />
            </>
          }
          data={dataFood}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <CardFood
              description={item.description}
              price={item.price}
              id={item.id}
              photo_url={item.photo_url}
            />
          )}
        />
      </Container>
    </>
  )
}

// ;[
//   {
//     description: 'Hamburger Gourmet',
//     foodType: { id: 1, name: 'FASTFOOD' },
//     id: 49,
//     photo_url: 'https://develfood-3.herokuapp.com/photo/387',
//     price: 45.5,
//     restaurantName: "Vinicius's Bar",
//   },
//   {
//     description: 'Yakisoba',
//     foodType: { id: 4, name: 'DOCE' },
//     id: 43,
//     photo_url: 'https://develfood-3.herokuapp.com/photo/401',
//     price: 40.56,
//     restaurantName: "Vinicius's Bar",
//   },
//   {
//     description: 'Picanha na brasa',
//     foodType: { id: 3, name: 'ITALIANA' },
//     id: 46,
//     photo_url: 'https://develfood-3.herokuapp.com/photo/402',
//     price: 150.89,
//     restaurantName: "Vinicius's Bar",
//   },
//   {
//     description: 'Pizza de Peperoni',
//     foodType: { id: 2, name: 'PIZZA' },
//     id: 48,
//     photo_url: 'https://develfood-3.herokuapp.com/photo/403',
//     price: 80.9,
//     restaurantName: "Vinicius's Bar",
//   },
// ]
