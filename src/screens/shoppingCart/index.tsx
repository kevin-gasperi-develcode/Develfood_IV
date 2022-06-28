import React from 'react'
import { StatusBar, View } from 'react-native'
import { HeaderAdress } from '../../components/headerAdress'
import { HeaderStandard } from '../../components/headerStandard'
import { RestaurantInfo } from '../../components/restaurantInfo'
import { useCart } from '../../context/cart'
import theme from '../../global/theme'
import { Container } from './styles'

export function ShoppingCart() {
  const { demand } = useCart()

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
      <HeaderAdress />
      <Container>
        <RestaurantInfo imageRestaurant="" nameRestaurant="" />
      </Container>
    </>
  )
}

// os dados do usuário, bem como o endereço, devem estar guardados em um contexto para serem renderizados quando necessário

// ao sair e voltar da tela de carrinho, sem que seja alterada as informações já existentes, os dados devem ser carregados novamente

// deve-se respeitar as exigências de animações conforme o layout proposto

// ao excluir um item do carrinho, o contexto de carrinho deve ser atualizado para refletir os dados de acordo

// ao finalizar um pedido, os dados de contexto do carrinho devem ser excluídos para que o usuário possa iniciar o processo de compra, caso deseje.

// caso o usuário tente inserir itens de outro restaurante em um carrinho existente, deve-se informar que não é possível adicionar itens de mais de um estabelecimento no mesmo pedido
