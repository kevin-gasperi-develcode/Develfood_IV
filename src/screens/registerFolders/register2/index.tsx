import React from 'react'
import { Container, ViewButton, ViewInputs } from './styles'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { CustomInput } from '../../../components/customInput'
import { HeaderStandard } from '../../../components/headerStandard'
import { RegisterSteps } from '../../../components/registerSteps'
import { ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ButtonStandard } from '../../../components/buttonStandard'
import theme from '../../../global/theme'

export function Register2({ route }: any) {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const onSignInPressed = () => {
    const values = getValues()
    const { email, password } = route.params
    navigation.navigate('Register3', {
      email,
      password,
      firstName: values.firstName,
      lastName: values.lastName,
      cpf: values.cpf,
      phone: values.phone,
      photo: {
        code: ' ',
      },
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
          <ScrollView showsVerticalScrollIndicator={true}>
            <RegisterSteps
              circle={theme.icons.circle_filled}
              circle1={theme.icons.circle_empty}
              circle2={theme.icons.circle_empty}
              girl={theme.icons.girl_rigth_h_up}
            />
            <ViewInputs>
              <CustomInput
                image={theme.icons.identity_icon}
                name="firstName"
                placeholder="Nome"
                control={control}
                rules={{
                  required: 'Nome deve ser preenchido',
                }}
              />

              <CustomInput
                image={theme.icons.identity_icon}
                name="lastName"
                placeholder="Sobrenome"
                control={control}
                password={false}
                rules={{
                  required: 'Sobrenome deve ser preenchido',
                  minLength: {
                    value: 0,
                    message: 'Sobrenome deve conter mais de um caracter',
                  },
                }}
              />
              <CustomInput
                image={theme.icons.document_icon}
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
                image={theme.icons.cellphone_icon}
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
              <ViewButton>
                <ButtonStandard
                  title="Continuar"
                  onPressed={handleSubmit(onSignInPressed)}
                />
              </ViewButton>
            </ViewInputs>
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </>
  )
}
