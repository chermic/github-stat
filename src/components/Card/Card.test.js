import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardComponent from '.';

const title = 'Card title';
const content = 'Card content';

afterEach(() => {
  cleanup();
});

const getComponent = (cardTitle = title, cardContent = content) => (
  render(
    <CardComponent 
      title={cardTitle}
      content={<div>{cardContent}</div>}
    />
  )
);

test('should render card title from props', () => {
  const { getByText }  = getComponent();

  const titleElement = getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test('should render card content from props', () => {
  const { getByText }  = getComponent();

  const contentElement = getByText(content);
  expect(contentElement).toBeInTheDocument();
});