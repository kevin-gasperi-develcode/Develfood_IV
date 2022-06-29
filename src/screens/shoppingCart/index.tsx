import React, { useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CardFood } from '../../components/cardFood'
import { ViewItems } from '../../components/cardFood/styles'
import { CartView } from '../../components/cartView'
import { ViewCart } from '../../components/cartView/styles'
import { HeaderAdress } from '../../components/headerAdress'
import { HeaderStandard } from '../../components/headerStandard'
import { RestaurantInfo } from '../../components/restaurantInfo'
import { useAuth } from '../../context/auth'
import { useCart } from '../../context/cart'
import theme from '../../global/theme'
import { useGet } from '../../services'
import { Container, FlatListmodified, TextMeusItens } from './styles'

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

export function ShoppingCart() {
  const { demand } = useCart()
  const { authState } = useAuth()
  const { cartCounter } = useCart()
  const [dataFood, setDataFood] = useState<RestaurantFood[]>([])

  const idRestaurantSearch = demand.find((product) => product.restaurantId)
  const idRestaurant = idRestaurantSearch?.restaurantId.toString()

  const [restaurantData, setRestaurantData] = useState<any>({
    name: '',
    food_types: {
      id: 0,
      name: '',
    },
  })

  const { fetchData } = useGet<RestaurantFood[]>(
    `plate/search?name&restaurantid=${idRestaurant}`,
    { headers: { Authorization: ` Bearer ${authState.token}` } },
    dataReturn,
  )

  function dataReturn(response: RestaurantFood[]) {
    const restaurant = response.find((item) => item.restaurantName)
    const restaurantName = restaurant?.restaurantName
    const restaurantType = restaurant?.foodType
    setRestaurantData({ name: restaurantName, food_types: restaurantType })

    const idInDemand = demand.map((item) => item.plate.id)

    const idInResponse = response.find((item) => item.foodType.id)

    console.log('idREsponse', idInResponse)
    console.log('idDemand', idInDemand)
    setDataFood([...dataFood, ...response])
    // setDataFood([...dataFood, ...dataFood])
  }

  useEffect(() => {
    ;(async () => await fetchData())()
  }, [])
  // console.log('demand', demand)
  return (
    <>
      <StatusBar
        barStyle={'default'}
        backgroundColor={theme.colors.background_red}
      />
      <HeaderStandard
        backGround="red"
        leftButton={theme.icons.back_button_x_white}
        title="Compras"
      />
      <Container>
        <FlatListmodified
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <HeaderAdress />
              <RestaurantInfo
                imageRestaurant=""
                nameRestaurant={restaurantData.name}
                food_types={restaurantData.food_types}
              />
              <TextMeusItens>Meus Itens</TextMeusItens>
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
              restaurantId={item.id}
              photo_url={item.photo_url}
            />
          )}
        />
      </Container>
      <CartView
        textCart={cartCounter()}
        leftViewItem="dollar"
        centerButton="Finalizar pedido"
      />
    </>
  )
}

// os dados do usuário, bem como o endereço, devem estar guardados em um contexto para serem renderizados quando necessário

// ao sair e voltar da tela de carrinho, sem que seja alterada as informações já existentes, os dados devem ser carregados novamente

// deve-se respeitar as exigências de animações conforme o layout proposto

// ao excluir um item do carrinho, o contexto de carrinho deve ser atualizado para refletir os dados de acordo

// ao finalizar um pedido, os dados de contexto do carrinho devem ser excluídos para que o usuário possa iniciar o processo de compra, caso deseje.

// caso o usuário tente inserir itens de outro restaurante em um carrinho existente, deve-se informar que não é possível adicionar itens de mais de um estabelecimento no mesmo pedido
