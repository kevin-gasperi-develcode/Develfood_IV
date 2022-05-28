import React from 'react'
import { Container, ViewInputs } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { CustomInput } from '../../../components/customInput'
import { HeaderRegister } from '../../../components/headerRegister'
import { RegisterSteps } from '../../../components/registerSteps'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ButtonStandard } from '../../../components/buttonStandard'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useAuth } from '../../../context/auth'
import { usePost } from '../../../services'

interface CreateUserRequest {
  email: string
  password: string
  creationDate: string
  role: {
    id: 2
  }
  costumer: {
    firstName: string
    lastName: string
    cpf: string
    phone: string
    photo: string
    address: [
      {
        street: string
        number: string
        neighborhood: string
        city: string
        zipCode: string
        state: string
        nickname: string
      },
    ]
  }
}

export function Register3({ route }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const navigation = useNavigation()
  const { signUp, setAuthState } = useAuth()
  const theme = useTheme()

  console.log(errors)

  const onSignInPressed = () => {
    const { email, password, firstName, lastName, cpf, phone, photo } =
      route.params
    const values = getValues()

    signUp({
      email,
      password,
      firstName,
      lastName,
      cpf,
      phone,
      photo,
      street: values.street,
      number: values.number,
      neighborhood: values.neighborhood,
      city: values.city,
      zipcode: values.cep,
      state: values.state,
      nickname: values.nickname,
    })
  }
  navigation.navigate('RegisterSucess' as never)
  const { email, password, firstName, lastName, cpf, phone, photo } =
    route.params
  const values = getValues()

  const {
    data: dataPost,
    handlerPost,
    loading: loadingsPost,
    error: errorPost,
  } = usePost<CreateUserRequest, any>(
    '/user',
    {
      email,
      password,
      creationDate: route.params,
      role: route.params,
      costumer: route.params,
    },
    undefined,
    (dataReturn) => {
      setAuthState(dataReturn)
      console.log(dataReturn)
      navigation.navigate('Routes' as never)
    },
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
                    minLength: {
                      value: 8,
                      message: 'CEP com 8 digitos',
                    },
                    maxLength: {
                      value: 8,
                      message: 'CEP com 8 digitos',
                    },
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
                onPressed={handleSubmit(onSignInPressed)}
              />
            </View>
          </ViewInputs>
        </ScrollView>
      </Container>
    </>
  )
}
