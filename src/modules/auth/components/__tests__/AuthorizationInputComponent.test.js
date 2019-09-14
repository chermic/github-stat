import React from 'react';
import { Formik, Field } from 'formik';
import { render, waitForElement, cleanup, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthInputComponent from '../AuthorizationInputComponent';
import { authFormValidation } from '../../utils';

afterEach(cleanup);

const field = {
  name: 'email',
  id: 'email',
  label: 'email',
  type: 'email',
  required: true,
};

const initialValues = {
  [field.name]: '',
};

const renderInput = (
  { name, label, id, type, required } = field,
  initVals = initialValues,
) => (
  render(
    <Formik
      initialValues={initVals}
      validate={authFormValidation}
    >
      {(formProps) => {
        return (
          <Field
            name={name}
            id={id}
            label={label}
            required={required}
            type={type}
            component={AuthInputComponent}
          />
        );
      }}
    </Formik>
  )
);

test('should render label from prop', () => {
  const { getByText } = renderInput();

  const element = getByText(field.name);
  expect(element).toBeDefined();
});

test('should focus on input by label click', () => {
  const { getByLabelText } = renderInput(field, { [field.name]: '123' });

  const inputWithId = getByLabelText(field.label);
  expect(inputWithId).toBeTruthy();
  expect(inputWithId.value).toBe('123');
});

test('should set type of input from props', async () => {
  const { getByLabelText } = renderInput();

  const input = getByLabelText(field.label);

  expect(input).toHaveAttribute('type', field.type);
});
