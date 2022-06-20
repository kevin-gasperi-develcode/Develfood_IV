import React, { useState } from 'react'
import {
  ButtonSecurity,
  Container,
  ImageLogo,
  Input,
  SecurityImage,
} from './styles'
import { Controller } from 'react-hook-form'
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  Text,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../global/theme'

interface CustomInputProps {
  control: any
  name: string
  placeholder: string
  rules?: object
  image: ImageSourcePropType
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
  const [isClicked, setIsClicked] = useState(true)

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
          <Container style={{ borderColor: error ? '#C20C18' : '#BFBABA' }}>
            <ImageLogo source={image} resizeMode={'contain'} />
            <Input
              style={{ fontSize: RFValue(16) }}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={password && isClicked}
              keyboardType={keybord}
            />
            {password && (
              <ButtonSecurity onPress={handlerSecurity}>
                <SecurityImage
                  source={theme.icons.security_icon}
                  resizeMode={'contain'}
                ></SecurityImage>
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
