import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

import AuthInputComponent from './AuthorizationInputComponent';

it('should render label from prop', async () => {
  const { getByText } = render(<AuthInputComponent label='email' />);

  await waitForElement(() => getByText(/email/i));
});

it('should render input with id from prop', async () => {
  const { container } = render(<AuthInputComponent id='email' required/>);

  const inputWithId = await waitForElement(() => container.querySelector('#email'));

});

it('should set required attribute if it get by props', async () => {
  const { container } = render(<AuthInputComponent id='email' required/>);

  const inputWithId = await waitForElement(() => container.querySelector('#email'));

  expect(container.querySelector('#email')).toHaveAttribute('required');
});

it('should set type of input from props', async () => {
  const { container } = render(<AuthInputComponent id='email' type='text'/>);

  const inputWithId = await waitForElement(() => container.querySelector('#email'));

  expect(container.querySelector('#email')).toHaveAttribute('type');
});