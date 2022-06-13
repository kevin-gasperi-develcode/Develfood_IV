import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
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
  description: string
  foodType: {
    id: number
    name: string
  }
  id: number
  photo_url: string
  price: number
  restaurantName: string
}
interface ApiDataFood {
  content: RestaurantFood[]
  totalElements: number
}

export function RestaurantProfile({ route }: any) {
  const { id, name, photo_url } = route.params
  const [filter, setFilter] = useState({ page: 0 })
  const [dataEmpty, setDataEmpty] = useState(1)
  const [dataFood, setDataFood] = useState<RestaurantFood[]>([])
  const { authState } = useAuth()
  const { loading, fetchData } = useGet(
    `/plate/restaurant/${id}?page=${filter.page}&quantity=10`,
    { headers: { Authorization: ` Bearer ${authState.token}` } },
    dataReturn,
  )

  useEffect(() => {
    ;(async () => await fetchData())()
  }, [filter])

  function dataReturn(response: ApiDataFood) {
    setDataFood([...dataFood, ...response.content])
    setDataEmpty(response.totalElements)
    console.log('dataREturn', response.content)
    console.log('dataCompleto', response)
  }
  async function handlerOnEndReached() {
    setFilter({ page: filter.page + 1 })
    console.log(filter.page)
  }

  return (
    <>
      <HeaderStandard
        goBackButton={theme.icons.back_button}
        imageRight={theme.icons.favorite_white}
        title={'Restaurantes'}
      />

      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          onEndReached={handlerOnEndReached}
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
              <SearchFood nameRestaurant={name} textChange={(text) => text} />
              <View>
                {dataEmpty === 0 ? (
                  <>
                    <ImageNotFound source={theme.icons.not_found} />
                    <TextNotFound>Nenhum prato encontrado</TextNotFound>
                  </>
                ) : null}
              </View>
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
