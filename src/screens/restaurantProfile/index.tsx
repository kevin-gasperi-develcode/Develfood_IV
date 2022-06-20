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
  food_types: {
    id: number
    name: string
  }
  restaurantName: string
  photo_url: string
}
;[]
interface ImageData {
  id: number
  code: string
}
export function RestaurantProfile({ route }: any) {
  const { id, name, photo_url, food_types } = route.params
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

  const photo = photo_url.slice(33)
  useEffect(() => {
    ;(async () => await fetchImage())()
  }, [photo])

  const { fetchData: fetchImage, data: dataImage } = useGet<ImageData>(photo, {
    headers: { Authorization: ` Bearer ${authState.token}` },
  })

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
                <ImageNotFound source={theme.icons.plate_not_found} />
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
                imageRestaurant={dataImage.code}
                food_types={food_types}
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
              name={item.name}
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
