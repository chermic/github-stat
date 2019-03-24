import React from 'react';
import styled from 'styled-components';
import AuthorizationInput from './components/presentional/AuthorizationInputComponent';
import AuthorizationButton from './components/presentional/AuthorizationButtonComponent';

const Form = styled.form`
  flex-basis: 28%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 0 auto;
  background: #fff;
  border: 1px solid black;
  padding: 70px 50px;
  color: #000;

  & div,
  & button {
    margin: 15px 0;
  }

  @media (max-width: 1024px) {
    padding: 40px 30px;
  }

  @media (max-width: 960px) {
    padding: 20px 15px;
  }
`;

export default function Authorization() {
  return (
    <Form>
      <AuthorizationInput id='name' label='Имя' required={true}/>
      <AuthorizationInput id='email' label='E-mail'  required={true}/>
      <AuthorizationInput id='password' label='Пароль' type='password'  required={true}/>
      <AuthorizationButton text='Зарегистрироваться' />
    </Form>
  )
}