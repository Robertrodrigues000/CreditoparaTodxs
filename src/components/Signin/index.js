import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { PrettoSlider } from "../SliderStyle";
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
} from "./SigninElements";

const SignIn = () => {
  const [nome, setNome] = useState("");
  const [valorCredito, setValorCredito] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();  
  const onSubmit = (data) => {
    openModal();
    console.log(data);
  }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">CréditoParaTodxs</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormH1>Informe seus dados</FormH1>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput id="name" {...register('name', { required: true })} />
                {errors.name && errors.name.type === "required" && <span>Campo requerido</span>}
              <FormLabel htmlFor="cpf">CPF</FormLabel>
              <FormInput id="cpf" {...register('cpf', { required: true, minLength: 11 })} />
                {errors.cpf && errors.cpf.type === "required" && <span>Campo requerido</span>}
                {errors.cpf && errors.cpf.type === "minLength" && <span>CPF precisa ter 11 números</span> }
              <FormLabel htmlFor="tel">Telefone</FormLabel>
              <FormInput id="tel" {...register('tel', { required: true })} />
                {errors.tel && errors.tel.type === "required" && <span>Campo requerido</span>}
              <FormLabel htmlFor="credit">Qual o valor de crédito?</FormLabel>  
              <PrettoSlider
                id="credit"
                valueLabelDisplay="on"
                min={0}
                step={50}
                max={20000}
                aria-label="pretto slider"
                defaultValue={10000}
                {...register("credit")}
              />
              <FormButton type="submit">Próximo</FormButton>
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
