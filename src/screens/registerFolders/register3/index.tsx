import React, { useState } from 'react'
import { Container, ViewInputs } from './styles'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { CustomInput } from '../../../components/customInput'
import { HeaderRegister } from '../../../components/headerRegister'
import { RegisterSteps } from '../../../components/registerSteps'
import { Alert, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ButtonStandard } from '../../../components/buttonStandard'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useAuth } from '../../../context/auth'
import { usePost } from '../../../services'
import { AxiosError } from 'axios'

// interface CreateUserRequest {
//   email: string
//   password: string
//   creationDate: string
//   role: {
//     id: number
//   }
//   costumer: {
//     firstName: string
//     lastName: string
//     cpf: string
//     phone: string
//     photo: string
//     address: [{
//       street: string
//       number: string
//       neighborhood: string
//       city: string
//       zipCode: string
//       state: string
//       nickname: string
//   }]
//   }
// }
interface RequestProps {
  endpoint: string
  body: {}
  error: {
    title: string
    message: string
  }
}

export function Register3({ route }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const [request, setRequest] = useState({} as RequestProps)
  const navigation = useNavigation()
  const { setAuthState } = useAuth()
  const theme = useTheme()
  const values = getValues()
  const { email, password, firstName, lastName, cpf, phone, photo } =
    route.params
  const signUpData = {
    email,
    password,
    creationDate: new Date().toISOString(),
    role: {
      id: 2,
    },
    costumer: {
      firstName,
      lastName,
      cpf,
      phone,
      photo: '',
      address: [
        {
          street: values.street,
          number: values.number,
          neighborhood: values.neighborhood,
          city: values.city,
          zipCode: values.cep,
          state: values.state,
          nickname: values.nickname,
        },
      ],
    },
  }

  function createUserSuccess(data: any) {
    data.password && navigation.navigate('RegisterSucess' as never)
  }

  function createUserError(error: AxiosError<any, any> | any) {
    error && Alert.alert('Erro de cadastro', 'Email já cadastrado')
  }

  const { data, handlerPost, loading } = usePost<any, any>(
    '/user',
    createUserError,
    signUpData,
    undefined,
    createUserSuccess,
  )
  return (
    <>
      <Container>
        <HeaderRegister />
        <ScrollView>
          <RegisterSteps
            circle={theme.icons.circle_filled}
            circle1={theme.icons.circle_filled}
            circle2={theme.icons.circle_empty}
            girl={theme.icons.girl_rigth_h_center}
          />

          <ViewInputs>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ width: RFValue(150) }}>
                <CustomInput
                  image={require('../../../assets/icons/Map.png')}
                  name="nickname"
                  placeholder="Apelido do End."
                  control={control}
                  rules={{
                    required: 'Campo obrigatório',
                    width: true,
                  }}
                />
              </View>
              <View style={{ width: RFValue(120) }}>
                <CustomInput
                  image={require('../../../assets/icons/Map.png')}
                  name="cep"
                  placeholder="CEP"
                  control={control}
                  keybord="numeric"
                  rules={{
                    required: 'Campo obrigatório',
                    // minLength: {
                    //   value: 8,
                    //   message: 'CEP com 8 digitos',
                    // },
                    // maxLength: {
                    //   value: 8,
                    //   message: 'CEP com 8 digitos',
                    // },
                  }}
                />
              </View>
            </View>

            <CustomInput
              image={require('../../../assets/icons/Map.png')}
              name="street"
              placeholder="Rua"
              control={control}
              rules={{
                required: 'Campo obrigatório',
              }}
            />
            <CustomInput
              image={require('../../../assets/icons/Map.png')}
              name="city"
              placeholder="Cidade"
              control={control}
              rules={{
                required: 'Campo obrigatório',
              }}
            />
            <CustomInput
              image={require('../../../assets/icons/Map.png')}
              name="neighborhood"
              placeholder="Bairro"
              control={control}
              rules={{
                required: 'Campo obrigatório',
              }}
            />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ width: RFValue(135) }}>
                <CustomInput
                  image={require('../../../assets/icons/Map.png')}
                  name="state"
                  placeholder="Estado"
                  control={control}
                  rules={{
                    required: 'Campo obrigatório',
                    width: true,
                  }}
                />
              </View>
              <View style={{ width: RFValue(135) }}>
                <CustomInput
                  image={require('../../../assets/icons/Map.png')}
                  name="number"
                  placeholder="Número"
                  keybord="numeric"
                  control={control}
                  rules={{
                    required: 'Campo obrigatório',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 25,
              }}
            >
              <ButtonStandard
                title="Continuar"
                onPressed={handleSubmit(handlerPost)}
              />
            </View>
          </ViewInputs>
        </ScrollView>
      </Container>
    </>
  )
}
