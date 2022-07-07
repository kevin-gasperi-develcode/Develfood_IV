import React from 'react'
import {
  BackButtonContainer,
  Container,
  ImageGoBack,
  ImageRight,
  RightImageContainer,
  TextContainer,
  TextTitle,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import theme from '../../global/theme'

interface HeaderProps {
  title?: string
  leftButton?: any
  goBackTo?: string
  backGround?: string
  imageRight?: any
}

export function HeaderStandard({
  title,
  leftButton,
  goBackTo,
  backGround,
  imageRight,
}: HeaderProps) {
  const navigation = useNavigation()
  const redColor = theme.colors.background_red
  return (
    <Container
      style={
        backGround === 'red'
          ? { backgroundColor: redColor }
          : { backgroundColor: 'white' }
      }
    >
      <BackButtonContainer
        onPress={
          goBackTo === 'ShoppingCart'
            ? () => navigation.navigate('ShoppingCart' as never)
            : goBackTo === 'SignIn'
            ? () => navigation.navigate('SignIn')
            : () => navigation.goBack()
        }
      >
        <ImageGoBack source={leftButton} />
      </BackButtonContainer>
      <TextContainer>
        <TextTitle>{title}</TextTitle>
      </TextContainer>
      <RightImageContainer>
        <ImageRight resizeMode="contain" source={imageRight} />
      </RightImageContainer>
    </Container>
  )
}
