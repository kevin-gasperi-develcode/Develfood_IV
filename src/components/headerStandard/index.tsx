import React from 'react'
import { ImageProps, ImageSourcePropType, Text } from 'react-native'
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
  goBackButton?: any
  backToStart?: boolean
  backGroundIsRed?: boolean
  imageRight?: any
}

export function HeaderStandard({
  title,
  goBackButton,
  backToStart,
  backGroundIsRed,
  imageRight,
}: HeaderProps) {
  const navigation = useNavigation()
  const redColor = theme.colors.background_red
  return (
    <Container
      style={
        backGroundIsRed
          ? { backgroundColor: redColor }
          : { backgroundColor: 'white' }
      }
    >
      <BackButtonContainer
        onPress={
          backToStart
            ? () => navigation.navigate('SignIn' as never)
            : () => navigation.goBack()
        }
      >
        <ImageGoBack source={goBackButton} />
      </BackButtonContainer>
      <TextContainer>
        <TextTitle>{title}</TextTitle>
      </TextContainer>
      <RightImageContainer>
        <ImageRight resizeMode="stretch" source={imageRight} />
      </RightImageContainer>
    </Container>
  )
}
