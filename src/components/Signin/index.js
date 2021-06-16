import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormInputRange,
  Label,
} from "./SigninElements";

const SignIn = () => {
  const [nome, setNome] = useState("");

  const [valorCredito, setValorCredito] = useState(0);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">CréditoParaTodxs</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Informe seus dados</FormH1>
              <FormLabel htmlFor="for">Nome</FormLabel>
              <FormInput
                type="text"
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">CPF</FormLabel>
              <FormInput type="number" required />
              <FormLabel htmlFor="for">Telefone</FormLabel>
              <FormInput type="number" placeholder="(xx)xxxxx-xxxx" pattern="" required />
              <FormLabel htmlFor="for">Qual o valor?</FormLabel>
              <FormInputRange
                onChange={(e) => setValorCredito(e.target.value)}
                type="range"
                min="0"
                max="20000"
                required
              />
              <Label> R$ {valorCredito},00</Label>
              <FormButton to="/credit" type="submit">Próximo</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
