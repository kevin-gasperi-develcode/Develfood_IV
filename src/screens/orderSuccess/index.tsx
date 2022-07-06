import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ButtonStandard } from '../../components/buttonStandard'
import { HeaderStandard } from '../../components/headerStandard'
import theme from '../../global/theme'
import {
   Container,
   ImageOrderSuccess,
   TextOrderSuccess,
   TitleOrderSuccess,
   ViewOrderSuccess,
} from './styles'

export function OrderSuccess() {
   const orderSuccesImg = require('../../assets/images/orderSuccessImg.png')
   const navigation = useNavigation()

   function navigateToDemand() {
      navigation.navigate('Demand' as never)
   }
   return (
      <>
         <HeaderStandard
            backGround="red"
            leftButton={theme.icons.back_button_x_white}
            goBackTo="Home"
            title="Checkout"
         />
         <Container>
            <ViewOrderSuccess>
               <TitleOrderSuccess>Pedido realizado!</TitleOrderSuccess>
               <ImageOrderSuccess source={orderSuccesImg} />
               <TextOrderSuccess>
                  Agradecemos a preferência! Em breve você receberá atualizações
                  sobre o status do seu pedido!
               </TextOrderSuccess>
            </ViewOrderSuccess>
            <ButtonStandard
               onPressed={() => {
                  navigateToDemand()
               }}
               title="Ver o pedido"
            />
         </Container>
      </>
   )
}
