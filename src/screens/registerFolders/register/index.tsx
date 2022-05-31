import React from 'react'
import { Container, ViewInputs } from './styles'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { CustomInput } from '../../../components/customInput'
import { HeaderRegister } from '../../../components/headerRegister'
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

interface DataProps {
  email: string
  password: string
}
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
    navigation.navigate(
      'Register2' as never,
      { email: values.email, password: values.password } as never,
    )
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <HeaderRegister />
          <ScrollView>
            <RegisterSteps
              circle={theme.icons.circle_empty}
              circle1={theme.icons.circle_empty}
              circle2={theme.icons.circle_empty}
              girl={theme.icons.girl_left_h_center}
            />

            <ViewInputs>
              <CustomInput
                image={require('../../../assets/icons/E-mail.png')}
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
                image={require('../../../assets/icons/Password.png')}
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
                image={require('../../../assets/icons/Password.png')}
                name="password confirm"
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
