import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, Image, StatusBar, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { InputPassword } from '../../components/inputPassword'
import { LogInButon } from '../../components/logInButton'
import { useAuth } from '../../hooks/auth'
import {
  Container,
  ImagesContainer,
  ViewInputComponents,
  ViewInputs,
  TextSenha,
} from './style'
import { useGet, usePost } from '../../services'
import { Load } from '../../components/load'
import { InputStandard } from '../../components/inputStandard'
interface CreateUserRequest {
  email: string
  password: string
}
interface TResponse {
  token: string
  type: string
}
export function SignIn() {
  const navigation = useNavigation()
  const [textEmail, setTextEmail] = useState('')
  const [textPassword, setTextPassword] = useState('')

  const { user } = useAuth()

  function handleNavigationRegister() {
    navigation.navigate('Register' as never)
  }
  function handleVerify() {
    if (!textPassword) {
      Alert.alert('A senha é obrigatória para logar')
    }
    if (!textEmail) {
      Alert.alert('O email é obrigatório para logar')
    } else handlerPost()
  }
  const {
    data: dataPost,
    handlerPost,
    loading: loadingsPost,
    error: errorPost,
  } = usePost<CreateUserRequest, TResponse>('/auth', {
    email: textEmail,
    password: textPassword,
  })

  const { data: dataGet, loading, error } = useGet<unknown[]>('/auth')
  console.log(dataGet)

  return (
    <>
      {loadingsPost || loading ? (
        <Load />
      ) : (
        <>
          <Container>
            <StatusBar
              barStyle={'dark-content'}
              backgroundColor={'transparent'}
            />
            <ImagesContainer>
              <Image source={require('../../assets/signIn/cheese_image.png')} />
              <Image
                source={require('../../assets/signIn/pizza_image.png')}
                style={{ height: 300 }}
              />
            </ImagesContainer>

            <ViewInputComponents>
              <Image
                source={require('../../assets/signIn/develfood_logo.png')}
                style={{ marginTop: -60 }}
              />
              <ViewInputs>
                <InputStandard
                  value={textEmail}
                  onChange={(text) => setTextEmail(text)}
                  placeholderProp={'exemplo@email.com'}
                  imageProp={require('../../assets/signIn/E-mail.png')}
                />
                <InputPassword
                  value={textPassword}
                  onChange={(value) => setTextPassword(value)}
                />
                <TextSenha>Esqueci minha senha</TextSenha>

                <LogInButon
                  onPress={handleVerify}
                  title={loadingsPost ? 'Carregando...' : 'Entrar'}
                />

                <TouchableOpacity onPress={handleNavigationRegister}>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 10,
                      alignSelf: 'flex-end',
                    }}
                  >
                    Não possui cadastro?
                    {<Text style={{ color: 'red' }}> Cadastre-se Aqui!</Text>}
                  </Text>
                </TouchableOpacity>
              </ViewInputs>
            </ViewInputComponents>
            <Image
              source={require('../../assets/signIn/backgroundSignIn.png')}
              style={{ marginTop: -50 }}
            />
          </Container>
        </>
      )}
    </>
  )
}
