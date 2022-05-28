import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Image, StatusBar } from 'react-native'
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
interface CreateUserRequest {
  email: string
  password: string
}
interface TResponse {
  token: string
  type: string
}
interface DataProps {
  email: string
  password: string
}
const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/

export function SignIn() {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

  const values = getValues()

  const data: DataProps = {
    email: values.email,
    password: values.password,
  }
  const { authState, setAuthState } = useAuth()

  const theme = useTheme()
  function handleNavigationRegister() {
    navigation.navigate('Register' as never)
  }
  const {
    data: dataPost,
    handlerPost,
    loading: loadingsPost,
    error: errorPost,
  } = usePost<CreateUserRequest, TResponse>(
    '/auth',
    {
      email: values.email,
      password: values.password,
    },
    undefined,
    (dataReturn) => {
      setAuthState(dataReturn)
      navigation.navigate('Routes' as never)
    },
  )

  return (
    <>
      <Container>
        <ScrollView>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
          />
          <ImagesContainer>
            <Image source={require('../../assets/signIn/cheese_image.png')} />
            <Image
              source={require('../../assets/signIn/pizza_image.png')}
              style={{ height: RFValue(300) }}
            />
          </ImagesContainer>

          <ViewInputComponents>
            <Image source={theme.icons.develfood} style={{ marginTop: -60 }} />
            <ViewInputs>
              <CustomInput
                image={require('')}
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
                image={require('../../../assets/signIn/Password.png')}
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
                onPressed={handleSubmit(handlerPost)}
                title="Entrar"
                isLoading={loadingsPost}
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
            source={require('../../assets/signIn/backgroundSignIn.png')}
            style={{ marginTop: -30 }}
          />
        </ScrollView>
      </Container>
    </>
  )
}
