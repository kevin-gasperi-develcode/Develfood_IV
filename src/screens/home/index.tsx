import React, { useEffect, useState } from 'react'
import { Dimensions, StatusBar } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { BannerHomeCategories } from '../../components/bannerHomeCategories'
import { BannerHomeImage } from '../../components/bannerHomeImages'
import { CardRestaurant } from '../../components/cardRestaurant'
import { HeaderAddress } from '../../components/headerAddress'
import { SearchRestaurants } from '../../components/searchRestaurants'
import theme from '../../global/theme'
import { useGet } from '../../services'
import { FlatListMod, TitleCategories, ViewLoading, Wrapper } from './styles'
import { useAuth } from '../../context/auth'
import { Load } from '../../components/load'
import { RFValue } from 'react-native-responsive-fontsize'
interface ApiData {
  content: [
    {
      id: number
      name: string
      photo_url: string
    },
  ]
}
const CardMargins =
  (Dimensions.get('screen').width - RFValue(312)) / RFValue(3.5)

export function Home() {
  const [page, setPage] = useState(0)
  const [dataRestaurants, setDataRestaurants] = useState([])
  const { authState } = useAuth()

  const { loading, fetchData } = useGet<ApiData>(
    `/restaurant?page=${page}&quantity=10`,
    {
      headers: {
        Authorization: ` Bearer ${authState.token}`,
      },
    },
    dataReturn,
  )
  function dataReturn(response: ApiData) {
    setDataRestaurants([...dataRestaurants, ...response.content] as never)
  }

  useEffect(() => {
    ;(async () => await fetchData())()
  }, [page])

  async function handlerOnEndReached() {
    setPage(page + 1)
  }

  return (
    <>
      <StatusBar
        barStyle={'default'}
        backgroundColor={theme.colors.background_red}
      />

      <FlatListMod
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={dataRestaurants}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(CardMargins),
          paddingBottom: 10,
        }}
        ListHeaderComponent={
          <>
            <HeaderAddress />
            <BannerHomeImage />
            <TitleCategories>Categorias</TitleCategories>
            <BannerHomeCategories />
            <SearchRestaurants />
          </>
        }
        onEndReached={handlerOnEndReached}
        ListFooterComponent={() => (
          <ViewLoading>{loading ? <Load /> : null}</ViewLoading>
        )}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <Wrapper>
            <CardRestaurant dataImage={item.photo_url} name={item.name} />
          </Wrapper>
        )}
      />
    </>
  )
}
