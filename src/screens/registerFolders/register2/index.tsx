import React from 'react'
import { Container, ViewInputs } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { CustomInput } from '../../../components/customInput'
import { HeaderRegister } from '../../../components/headerRegister'
import { RegisterSteps } from '../../../components/registerSteps'
import {
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native'
import { ButtonStandard } from '../../../components/buttonStandard'
import { useTheme } from 'styled-components'
import theme from '../../../global/theme'

interface DataProps {
  email: string
  password: string
}

export function Register2({ route }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const navigation = useNavigation()

  const onSignInPressed = () => {
    const { email, password } = route.params
    const values = getValues()

    navigation.navigate(
      'Register3' as never,
      {
        email,
        password,
        firstName: values.firstName,
        lastName: values.lastName,
        cpf: values.cpf,
        phone: values.phone,
        photo: '',
      } as never,
    )
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <HeaderRegister />
          <ScrollView showsVerticalScrollIndicator={true}>
            <RegisterSteps
              circle={theme.icons.circle_filled}
              circle1={theme.icons.circle_empty}
              circle2={theme.icons.circle_empty}
              girl={theme.icons.girl_rigth_h_up}
            />
            <ViewInputs>
              <CustomInput
                image={require('../../../assets/icons/Identity.png')}
                name="firstName"
                placeholder="Nome"
                control={control}
                rules={{
                  required: 'Nome deve ser preenchido',
                }}
              />

              <CustomInput
                image={require('../../../assets/icons/Identity.png')}
                name="lastName"
                placeholder="Sobrenome"
                control={control}
                rules={{
                  required: 'Sobrenome deve ser preenchido',
                  minLength: {
                    value: 0,
                    message: 'Sobrenome deve conter mais de um caracter',
                  },
                }}
              />
              <CustomInput
                image={require('../../../assets/icons/Document.png')}
                name="cpf"
                placeholder="CPF"
                keybord="numeric"
                control={control}
                rules={{
                  required: 'CPF deve ser preenchido',
                  minLength: {
                    value: 11,
                    message: 'O CPF deve conter 11 digitos',
                  },
                  maxLength: {
                    value: 11,
                    message: 'O CPF deve conter 11 digitos',
                  },
                }}
              />
              <CustomInput
                image={require('../../../assets/icons/Cellphone.png')}
                name="phone"
                placeholder="Telefone"
                keybord="numeric"
                control={control}
                rules={{
                  required: 'O telefone deve ser preenchido',
                  minLength: {
                    value: 11,
                    message: ' Exemplo de preenchimento (xx) xxxxx xxxx',
                  },
                  maxLength: {
                    value: 11,
                    message: 'O telefone deve conter 11 digitos',
                  },
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
