import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";


export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(146, 18, 216, 1) 0%,
    rgba(197, 42, 160, 1) 100%
  );
  @media screen and (max-width: 480px) {
    min-height: 100%;
  }
  
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    min-height: 400px;
    height: 60%;
    display: inline;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #2F2235;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 50px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    max-width: 400px;
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  justify-content: center;
`;

export const FormInput = styled.input`
  font-size: 16px;
  padding: 12px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormInputRange = styled.input`
  height: 80px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
`
export const Label = styled.label`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-bottom: 32px;
`

export const FormButton = styled.button`
  background: #9413d7;
  padding: 16px 16px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    background: #c52aa0;
    transition: all 0.2s ease-in-out;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const InputEdit = styled(TextField)`
  margin-bottom: 70px;
`

export const Errors = styled.span`
color: red;
margin-bottom: 5px;
`

export const SpanCredit = styled.span`
color: #fff;
display: flex;
justify-content: center;
margin-bottom: 32px;
`