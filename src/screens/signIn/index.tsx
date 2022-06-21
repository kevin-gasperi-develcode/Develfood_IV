import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, StatusBar, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../../context/auth'
import {
  Container,
  ImagesContainer,
  ViewInputComponents,
  ViewInputs,
  TextSenha,
  ImageCheese,
  ImagePizza,
  ImageDevelfood,
  ImageRedDust,
  TextRegister,
  TextRegisterRed,
} from './style'
import { usePost } from '../../services'
import { ButtonStandard } from '../../components/buttonStandard'
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

const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/

export function SignIn() {
  const cheesePhoto = require('../../assets/images/cheese_image.png')
  const pizzaPhoto = require('../../assets/images/pizza_image.png')
  const redDustPhoto = require('../../assets/images/backgroundRedDust.png')

  const { setAuthState } = useAuth()
  const navigation = useNavigation()
  const theme = useTheme()
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { email: 'kevin6@email.com', password: '123456' },
  })

  function signInSuccess(data: any) {
    data.token && setAuthState(data), navigation.navigate('Routes')
  }

  function signInError(error: AxiosError<any, any> | any) {
    error && Alert.alert('Erro de Login', 'Ocorreu um erro no Login')
  }

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
    navigation.navigate('Register')
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
            <ImageCheese source={cheesePhoto} resizeMode="contain" />
            <ImagePizza source={pizzaPhoto} resizeMode="contain" />
          </ImagesContainer>

          <ViewInputComponents>
            <ImageDevelfood source={theme.icons.develfood} resizeMode="cover" />
            <ViewInputs>
              <CustomInput
                image={theme.icons.email_icon}
                name="email"
                placeholder="exemplo@email.com"
                keybord="email-address"
                control={control}
                rules={{
                  required: 'O usuário deve ser preenchido',
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
                  required: 'A senha deve ser preenchida',
                  minLength: {
                    value: 5,
                    message: 'As senhas contém 5 caracters no mínimo',
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
                <TextRegister>
                  Não possui cadastro?
                  {<TextRegisterRed> Cadastre-se Aqui!</TextRegisterRed>}
                </TextRegister>
              </TouchableOpacity>
            </ViewInputs>
          </ViewInputComponents>
          <ImageRedDust source={redDustPhoto} />
        </ScrollView>
      </Container>
    </>
  )
}
