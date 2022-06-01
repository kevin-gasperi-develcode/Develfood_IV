import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Image, StatusBar, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../../context/auth'
import {
  Container,
  ImagesContainer,
  ViewInputComponents,
  ViewInputs,
  TextSenha,
} from './style'
import { usePost } from '../../services'
import { ButtonStandard } from '../../components/buttonStandard'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { CustomInput } from '../../components/customInput'
import { useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
interface CreateUserRequest {
  email: string
  password: string
}
interface TResponse {
  token: string
  type: string
}
interface RequestProps {
  endpoint: string
  body: {}
  error: {
    title: string
    message: string
  }
}
const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/

export function SignIn() {
  const [request, setRequest] = useState({} as RequestProps)
  const { authState, setAuthState } = useAuth()
  const navigation = useNavigation()
  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const values = getValues()

  function signInSuccess(data: any) {
    data.token && setAuthState(data), navigation.navigate('Routes' as never)
  }

  function signInError(error: AxiosError<any, any> | any) {
    error && Alert.alert('Erro de Login', 'Ocorreu um erro no Login')
  }
  // exemplo@email.com

  const {
    data: dataPost,
    handlerPost,
    loading,
  } = usePost<CreateUserRequest, TResponse>(
    '/auth',
    signInError,
    undefined,
    signInSuccess,
  )

  function handleNavigationRegister() {
    navigation.navigate('Register' as never)
  }

  return (
    <>
      <Container>
        <ScrollView>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
          />
          <ImagesContainer>
            <Image source={require('../../assets/icons/cheese_image.png')} />
            <Image
              source={require('../../assets/icons/pizza_image.png')}
              style={{ height: RFValue(300) }}
            />
          </ImagesContainer>

          <ViewInputComponents>
            <Image source={theme.icons.develfood} style={{ marginTop: -60 }} />
            <ViewInputs>
              <CustomInput
                image={require('../../assets/icons/E-mail.png')}
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
                image={require('../../assets/icons/Password.png')}
                name="password"
                placeholder="senha"
                control={control}
                password={true}
                rules={{
                  required: 'senha deve ser preenchida',
                  minLength: {
                    value: 5,
                    message: 'senha precisa de 5 caracters no mínimo',
                  },
                }}
              />

              <TextSenha>Esqueci minha senha</TextSenha>

              <ButtonStandard
                onPressed={handleSubmit(() => {
                  handlerPost({
                    email: getValues().email,
                    password: getValues().password,
                  })
                })}
                title="Entrar"
                isLoading={loading}
              />

              <TouchableOpacity onPress={handleNavigationRegister}>
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 10,
                    alignSelf: 'flex-end',
                  }}
                >
                  Não possui cadastro?
                  {
                    <Text
                      style={{
                        color: 'red',
                        position: 'absolute',
                        fontSize: 14,
                      }}
                    >
                      {' '}
                      Cadastre-se Aqui!
                    </Text>
                  }
                </Text>
              </TouchableOpacity>
            </ViewInputs>
          </ViewInputComponents>
          <Image
            source={require('../../assets/icons/backgroundSignIn.png')}
            style={{ marginTop: -30 }}
          />
        </ScrollView>
      </Container>
    </>
  )
}
