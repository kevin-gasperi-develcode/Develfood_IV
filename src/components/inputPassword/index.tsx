import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Container, ImageView, EyeView, EyeImage } from './styles'

interface Dados {
  changeSecurity: boolean
}
interface PasswordProps {
  value: string
  onChange: (text: string) => void
}
export function InputPassword({ value, onChange }: PasswordProps) {
  const [changeSecurity, setchangeSecurity] = useState(true)

  function handleSecurity() {
    setchangeSecurity(!changeSecurity)
  }
  return (
    <Container>
      <ImageView source={require('../../assets/signIn/Password.png')} />
      <TextInput
        placeholder="*****************"
        secureTextEntry={changeSecurity}
        maxLength={15}
        onChangeText={onChange}
        value={value}
      />
      <EyeView onPress={handleSecurity}>
        <EyeImage
          hidePassword={changeSecurity}
          source={require('../../assets/signIn/eye-slashed.png')}
        />
      </EyeView>
    </Container>
  )
}
