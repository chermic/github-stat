import React from 'react';
import { waitForElement, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import CardComponent from './CardComponent';

it('should render card title from props', async () => {
  const { container, getByText }  = render(
    <CardComponent 
      title={<h5>Card title</h5>}
    />
  );

  await waitForElement(() => getByText(/card title/i));
  expect(container.querySelector('h5')).toHaveTextContent('Card title');
});

it('should render card content from props', async () => {
  const { container, getByText }  = render(
    <CardComponent 
      content={<p>Card content</p>}
    />
  );

  await waitForElement(() => getByText(/card content/i));
  expect(container.querySelector('p')).toHaveTextContent('Card content');
});