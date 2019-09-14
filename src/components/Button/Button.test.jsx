import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '.';

afterEach(cleanup);

const defaultLabel = 'Отправить';

test('should render text from props', () => {
  const text = 'Сохранить';
  const { getByText } = render(<Button label={text} />);
  expect(getByText(text)).toBeInTheDocument();
});

test('should render default text with no props', () => {
  const { getByText } = render(<Button />);
  expect(getByText(defaultLabel)).toBeInTheDocument();
});

test('should trigger onClick prop on click', () => {
  const func = jest.fn();
  const { getByText } = render(<Button onClick={func} />);
  fireEvent.click(getByText(defaultLabel));
  expect(func).toHaveBeenCalled();
});

test('should be disabled from props', () => {
  const { getByText } = render(<Button disabled />);
  expect(getByText(defaultLabel)).toBeDisabled();
});
