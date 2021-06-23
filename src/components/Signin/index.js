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
  Errors,
  SpanCredit
} from "./SigninElements";

const SignIn = () => {
  const [ sliderValue, setSliderValue ] = useState(0);
  const [ formData, setFormData] = useState({ name:'' , cpf: '', tel:'', credit: '' });
  const [ creditValue , setCreditValue ] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();  
  const onSubmit = (data) => {
    setFormData({...data, credit: sliderValue}) ;
    openModal();
  }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setSliderValue(newValue);
    setCreditValue(newValue);
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
                {errors.name && errors.name.type === "required" && <Errors>Campo requerido</Errors>}
              <FormInput id="name" {...register('name', { required: true })} />
              <FormLabel htmlFor="cpf">CPF</FormLabel>
                {errors.cpf && errors.cpf.type === "required" && <Errors>Campo requerido</Errors>}
                {errors.cpf && errors.cpf.type === "minLength" && <Errors>CPF precisa ter 11 números</Errors> }
              <FormInput id="cpf" {...register('cpf', { required: true, minLength: 11 })} />
              <FormLabel htmlFor="tel">Telefone</FormLabel>
                {errors.tel && errors.tel.type === "required" && <Errors>Campo requerido</Errors>}
              <FormInput id="tel" {...register('tel', { required: true })} />
              <FormLabel htmlFor="credit">Qual o valor de crédito?</FormLabel>  
              <PrettoSlider
                id="credit"
                valueLabelDisplay="auto"
                min={0}
                step={50}
                max={20000}
                aria-label="pretto slider"
                value = {sliderValue}
                onChange= {handleChange}
              />
              <SpanCredit >R$ {creditValue},00</SpanCredit>              
              <FormButton type="submit">Próximo</FormButton>
              <Modal showModal={showModal} setShowModal={setShowModal} data={formData}/>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
