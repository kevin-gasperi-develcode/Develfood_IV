import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Container, ImageView } from './styles'

interface InputLoginProps {
  value: string
  onChange: (text: string) => void
  placeholderProp?: string
  imageProp?: any
}
export function InputStandard({
  value,
  onChange,
  placeholderProp,
  imageProp,
}: InputLoginProps) {
  return (
    <Container>
      <ImageView source={imageProp} />
      <TextInput
        maxLength={20}
        placeholder={placeholderProp}
        onChangeText={onChange}
        value={value}
      />
    </Container>
  )
}
