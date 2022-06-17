import React from 'react'
import { Container, ViewInputs } from './styles'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { CustomInput } from '../../../components/customInput'
import { HeaderStandard } from '../../../components/headerStandard'
import { RegisterSteps } from '../../../components/registerSteps'
import {
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  View,
} from 'react-native'
import { ButtonStandard } from '../../../components/buttonStandard'
import { useTheme } from 'styled-components'

const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm()
  const navigation = useNavigation()
  const pwd = watch('password')
  const theme = useTheme()

  const onSignInPressed = () => {
    const values = getValues()
    navigation.navigate('Register2', {
      email: values.email,
      password: values.password,
    } as never)
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <HeaderStandard
            title={'Cadastro'}
            goBackButton={theme.icons.back_button}
          />
          <ScrollView>
            <RegisterSteps
              circle={theme.icons.circle_empty}
              circle1={theme.icons.circle_empty}
              circle2={theme.icons.circle_empty}
              girl={theme.icons.girl_left_h_center}
            />

            <ViewInputs>
              <CustomInput
                image={theme.icons.email_icon}
                name="email"
                placeholder="exemplo@email.com"
                keybord="email-address"
                control={control}
                rules={{
                  required: 'usuario deve ser preenchido',
                  pattern: EMAIL_REGEX,
                }}
              />

              <CustomInput
                image={theme.icons.password_icon}
                name="password"
                placeholder="senha"
                control={control}
                password={true}
                rules={{
                  required: 'senha deve ser preenchida',
                  // minLength: {
                  //   value: 5,
                  //   message: 'senha precisa de 5 caracters no mínimo',
                  // },
                }}
              />
              <CustomInput
                image={theme.icons.password_icon}
                name="password_confirm"
                placeholder="confirmar senha"
                control={control}
                password={true}
                rules={{
                  validate: (value: any) =>
                    value === pwd || 'Senhas não conferem',
                  required: 'senha deve ser preenchida',
                }}
              />
              <View
                style={{
                  marginTop: 25,
                }}
              >
                <ButtonStandard
                  title="Continuar"
                  onPressed={handleSubmit(onSignInPressed)}
                />
              </View>
            </ViewInputs>
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </>
  )
}
