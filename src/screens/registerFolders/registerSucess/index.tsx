import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTheme } from 'styled-components'
import { ButtonStandard } from '../../../components/buttonStandard'
import { HeaderStandard } from '../../../components/headerStandard'
import {
  Container,
  Content,
  SubTitle,
  Title,
  ViewImage,
  Wrapper,
} from './styles'

export function RegisterSucess() {
  const theme = useTheme()
  const navigation = useNavigation()

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <HeaderStandard
        title={'Cadastro'}
        leftButton={theme.icons.back_button_x}
        goBackTo="SignIn"
      />
      <Content>
        <ViewImage source={theme.icons.girl_success} />
        <Wrapper>
          <Title>Cadastro Finalizado!</Title>
          <SubTitle>
            Parabéns! Agora você pode aproveitar nossas ofertas e serviços e
            economizar com super cupons Develfood.
          </SubTitle>
          <ButtonStandard title="Concluir" onPressed={onSignInPressed} />
        </Wrapper>
      </Content>
    </Container>
  )
}
