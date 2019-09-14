import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import styled from 'styled-components';
import AuthorizationInput from './components/AuthorizationInputComponent';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import { useStore } from '../../store';
import { authValidation, authorize, authFormValidation } from './utils';

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

  & > div,
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

const Auth = styled.div`
  width: 30%;
  margin: 0 auto;
  position: relative;
`;

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const Authorization = (props) => {
  const { state, dispatch } = useStore();
  const { auth: authSpinner } = state.spinners;

  const onSubmit = (values) => {
    authorize(dispatch, values);
  }

  return (
    <Auth>
      <Spinner show={authSpinner} />
      <Formik
        initialValues={initialValues}
        validationSchema={authFormValidation}
        onSubmit={onSubmit}
      >
        {(formProps) => {
          const isSubmitDisabled = !formProps.isValid;
          return (
            <Form onSubmit={formProps.handleSubmit}>
              <Field
                name="username"
                label="Имя"
                required
                component={AuthorizationInput}
              />
              <Field
                name="email"
                label="E-mail"
                required
                type="email"
                component={AuthorizationInput}
              />
              <Field
                name="password"
                label="Пароль"
                type='password'
                required
                component={AuthorizationInput}
              />
              <Button
                label='Зарегистрироваться'
                disabled={isSubmitDisabled}
                type="submit"
              />
            </Form>
          );
        }}
      </Formik>
    </Auth>
  );
};

export default Authorization;