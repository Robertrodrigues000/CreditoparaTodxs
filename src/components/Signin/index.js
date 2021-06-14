import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">CréditoParaTodxs</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Cadastre uma nova conta</FormH1>
              <FormLabel htmlFor="for">Nome</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">CPF</FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="for">De quanto você precisa?</FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="for">Melhor plano para você:</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Simular</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> 
    </>
  )
}

export default SignIn
