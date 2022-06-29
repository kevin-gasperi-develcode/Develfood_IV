import React, { useEffect, useState } from 'react'
import { Dimensions, StatusBar } from 'react-native'
import { BannerHomeCategories } from '../../components/bannerHomeCategories'
import { BannerHomeImage } from '../../components/bannerHomeImages'
import { CardRestaurant } from '../../components/cardRestaurant'
import { SearchRestaurants } from '../../components/searchRestaurants'
import theme from '../../global/theme'
import { useGet } from '../../services'
import { useAuth } from '../../context/auth'
import { Load } from '../../components/load'
import { RFValue } from 'react-native-responsive-fontsize'
import { useDebouncedCallback } from 'use-debounce'
import { useNavigation } from '@react-navigation/native'
import { useCart } from '../../context/cart'
import { CartView } from '../../components/cartView'
import {
  FlatListMod,
  TitleCategories,
  ViewHomeCategories,
  ViewLoading,
  ViewSearchREstaurant,
  Wrapper,
} from './styles'
import { HeaderStandard } from '../../components/headerStandard'

interface ApiData {
  content: Restaurant[]
}
interface Restaurant {
  id: number
  name: string
  photo_url: string
  food_types: FoodTypes[]
}
interface FoodTypes {
  id: number
  name: string
}
export function Home() {
  const navigation = useNavigation()
  const { authState } = useAuth()
  const { cartCounter } = useCart()
  const [dataRestaurants, setDataRestaurants] = useState<Restaurant[]>([])
  const [filter, setFilter] = useState({
    text: '',
    page: 0,
  })

  function CardMargins() {
    return (Dimensions.get('screen').width - RFValue(312)) / RFValue(3)
  }

  const { loading, fetchData } = useGet<ApiData>(
    `/restaurant/filter?name=${filter.text}&page=${filter.page}&quantity=10`,
    { headers: { Authorization: ` Bearer ${authState.token}` } },
    dataReturn,
  )
  function dataReturn(response: ApiData) {
    setDataRestaurants([...dataRestaurants, ...response.content])
  }
  useEffect(() => {
    ;(async () => await fetchData())()
  }, [filter])

  async function handlerOnEndReached() {
    setFilter({ ...filter, page: filter.page + 1 })
  }

  const debounced = useDebouncedCallback((text) => {
    handleSearch(text)
  }, 1500)

  function handleSearch(text: string) {
    if (text.length > 1) {
      setDataRestaurants([])
      setFilter({ text: text, page: 0 })
    } else setDataRestaurants([]), setFilter({ text: '', page: 0 })
  }

  function handlerNavigate(
    id: number,
    name: string,
    photo_url: string,
    food_types: any,
  ) {
    navigation.navigate('RestaurantProfile', {
      id,
      name,
      photo_url,
      food_types,
    } as never)
  }

  return (
    <>
      <StatusBar
        barStyle={'default'}
        backgroundColor={theme.colors.background_red}
      />
      <HeaderStandard
        backGround="red"
        leftButton={theme.icons.map_logo}
        title="rua Arcy da Nobrega 667, Panazollo"
      />
      <FlatListMod
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={dataRestaurants}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(CardMargins()),
          marginTop: 10,
        }}
        ListHeaderComponent={
          <>
            <BannerHomeImage />
            <TitleCategories>Categorias</TitleCategories>
            <ViewHomeCategories>
              <BannerHomeCategories />
            </ViewHomeCategories>
            <ViewSearchREstaurant>
              <SearchRestaurants textChange={(text) => debounced(text)} />
            </ViewSearchREstaurant>
          </>
        }
        onEndReached={handlerOnEndReached}
        ListFooterComponent={() => (
          <ViewLoading>{loading ? <Load /> : null}</ViewLoading>
        )}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <Wrapper>
            <CardRestaurant
              onPress={() =>
                handlerNavigate(
                  item.id,
                  item.name,
                  item.photo_url,
                  item.food_types[0],
                )
              }
              dataImage={item.photo_url}
              name={item.name}
              id={item.id}
              foodTypes={item.food_types[0]}
            />
          </Wrapper>
        )}
      />
      {cartCounter() >= 1 ? (
        <CartView
          textCart={cartCounter()}
          leftViewItem="basket"
          centerButton="Ver carrinho"
        />
      ) : null}
    </>
  )
}
