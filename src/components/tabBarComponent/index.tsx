import React from 'react'
import { Image, Text } from 'react-native'
import theme from '../../global/theme'
import { Container } from './styles'

interface TabProps {
  focusedItem: any
  tabIcon: any
  iconName: string
}

export function TabBarComponent({ focusedItem, tabIcon, iconName }: TabProps) {
  return (
    <Container>
      <Image
        source={tabIcon}
        resizeMode={'contain'}
        style={{
          tintColor: focusedItem
            ? theme.colors.background_red
            : theme.colors.icon_gray_tab,
          height: focusedItem ? 25 : 23,
        }}
      />
      {focusedItem ? null : <Text>{iconName}</Text>}
    </Container>
  )
}
