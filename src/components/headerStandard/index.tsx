import React from 'react'
import { Text } from 'react-native'
import { BackButton, Container, ImageGoBack, TextTitle } from './styles'
import { useNavigation } from '@react-navigation/native'
import theme from '../../global/theme'

interface HeaderProps {
  title: string
  goBackButton: any
  backToStart?: boolean
  backGroundIsRed?: boolean
}

export function HeaderStandard({
  title,
  goBackButton,
  backToStart,
  backGroundIsRed,
}: HeaderProps) {
  const navigation = useNavigation()
  const red = theme.colors.background_red

  return (
    <Container
      style={
        backGroundIsRed
          ? { backgroundColor: red }
          : { backgroundColor: 'white' }
      }
    >
      <BackButton
        onPress={
          backToStart
            ? () => navigation.navigate('SignIn' as never)
            : () => navigation.goBack()
        }
      >
        <ImageGoBack source={goBackButton} />
      </BackButton>
      <TextTitle>
        <Text style={{ fontSize: 16, lineHeight: 16.41, color: '#2B2B2E' }}>
          {title}
        </Text>
      </TextTitle>
    </Container>
  )
}
