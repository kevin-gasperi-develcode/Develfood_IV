import React, { useState } from 'react'
import { Container, ViewInputs } from './styles'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { CustomInput } from '../../../components/customInput'
import { HeaderStandard } from '../../../components/headerStandard'
import { RegisterSteps } from '../../../components/registerSteps'
import { Alert, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ButtonStandard } from '../../../components/buttonStandard'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { usePost } from '../../../services'
import { AxiosError } from 'axios'

export function Register3({ route }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const navigation = useNavigation()
  const theme = useTheme()
  const { email, password, firstName, lastName, cpf, phone, photo } =
    route.params

  function createUserSuccess(data: any) {
    data.password && navigation.navigate('RegisterSucess' as never)
  }

  function createUserError(error: AxiosError<any, any> | any) {
    error && Alert.alert('Erro de cadastro', 'Email já cadastrado')
  }

  const { data, loading, handlerPost } = usePost<any, any>(
    '/user',
    createUserError,
    undefined,
    createUserSuccess,
  )

  return (
    <>
      <Container>
        <HeaderStandard
          title={'Cadastro'}
          goBackButton={theme.icons.back_button}
        />
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
                  image={theme.icons.map_icon}
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
                  image={theme.icons.map_icon}
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
              image={theme.icons.map_icon}
              name="street"
              placeholder="Rua"
              control={control}
              rules={{
                required: 'Campo obrigatório',
              }}
            />
            <CustomInput
              image={theme.icons.map_icon}
              name="city"
              placeholder="Cidade"
              control={control}
              rules={{
                required: 'Campo obrigatório',
              }}
            />
            <CustomInput
              image={theme.icons.map_icon}
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
                  image={theme.icons.map_icon}
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
                  image={theme.icons.map_icon}
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
                onPressed={handleSubmit(() => {
                  handlerPost({
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
                          street: getValues().street,
                          number: getValues().number,
                          neighborhood: getValues().neighborhood,
                          city: getValues().city,
                          zipCode: getValues().cep,
                          state: getValues().state,
                          nickname: getValues().nickname,
                        },
                      ],
                    },
                  })
                })}
              />
            </View>
          </ViewInputs>
        </ScrollView>
      </Container>
    </>
  )
}
