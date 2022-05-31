import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ButtonSecurity, Container, Input, SecurityItem } from './styles'
import { Controller } from 'react-hook-form'
import { Image, KeyboardTypeOptions, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../global/theme'

interface CustomInputProps {
  control: any
  name: string
  placeholder: string
  rules?: object
  image?: any
  keybord?: KeyboardTypeOptions
  password?: boolean
}
export function CustomInput({
  image,
  control,
  name,
  rules = {},
  placeholder,
  keybord,
  password,
}: CustomInputProps) {
  const [isClicked, setIsClicked] = useState(false)

  function handlerSecurity() {
    setIsClicked(!isClicked)
  }
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Container style={{ borderColor: error ? 'red' : 'gray' }}>
            <Image source={image} style={{ margin: 5 }} />
            <Input
              style={{ fontSize: RFValue(16) }}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={isClicked}
              keyboardType={keybord}
            />
            {password && (
              <ButtonSecurity onPress={handlerSecurity}>
                <SecurityItem source={theme.icons.security_icon}></SecurityItem>
              </ButtonSecurity>
            )}
          </Container>
          {error && (
            <Text style={{ fontSize: RFValue(16) }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  )
}
