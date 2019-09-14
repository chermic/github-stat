import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthView from '..';
import { StoreProvider } from '../../../store';

afterEach(() => {
  cleanup();
});

const getAuth = () => (
  render(
    <StoreProvider>
      <AuthView />
    </StoreProvider>
  )
);

describe('<AuthView /> spec', () => {
  test('should be button disabled by default', () => {
    const { getByText } = getAuth();
    expect(getByText('Зарегистрироваться')).toBeDisabled();
  });

  test('should display error and disable submit button with invalid data', async () => {
    const { getByLabelText, getByText } = getAuth();
    const usernameInput = getByLabelText('Имя');
    const submitButton = getByText('Зарегистрироваться');
    fireEvent.change(usernameInput, { target: { value: '1' } });
    fireEvent.blur(usernameInput);
    const error = await waitForElement(() => getByText('Поле не может содержать менее 3 сиволов'));
    expect(error).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('should enable button with valid data', async () => {
    const { getByLabelText, getByText } = getAuth();
    const usernameInput = getByLabelText('Имя');
    const emailInput = getByLabelText('E-mail');
    const passwordInput = getByLabelText('Пароль');
    const submitButton = getByText('Зарегистрироваться');
    fireEvent.change(usernameInput, { target: { value: 'someLogin' } });
    fireEvent.blur(usernameInput);
    fireEvent.change(emailInput, { target: { value: 'asd@mail.ru' } });
    fireEvent.blur(emailInput);
    fireEvent.change(passwordInput, { target: { value: 'somePassword' } });
    fireEvent.blur(passwordInput);
    expect(submitButton).not.toBeDisabled();
  });
});