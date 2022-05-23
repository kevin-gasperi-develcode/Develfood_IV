import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, Image, StatusBar, Alert, View } from 'react-native'
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
import { usePost } from '../../services'
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

  const { authState, setAuthState } = useAuth()
  console.log(authState)

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
      email: textEmail,
      password: textPassword,
    },
    undefined,
    (dataReturn) => {
      setAuthState(dataReturn)
      Alert.alert('ola', 'você foi logado')
      navigation.navigate('Routes' as never)
    },
  )
  return (
    <>
      {loadingsPost ? (
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
                <View>
                  {errorPost ? (
                    <Text style={{ color: 'red' }}>
                      Erro no Login, Tente Novamente
                    </Text>
                  ) : null}
                </View>
                <InputPassword
                  value={textPassword}
                  onChange={(value) => setTextPassword(value)}
                />
                <TextSenha>Esqueci minha senha</TextSenha>

                <LogInButon
                  onPress={handlerPost}
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
