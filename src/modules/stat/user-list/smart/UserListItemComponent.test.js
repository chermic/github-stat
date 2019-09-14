import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import UserListItemComponent from './UserListItemComponent';

afterEach(cleanup);

const props = {
  avatar_url: 'https://someing.com',
  html_url: 'https://somesite.com',
  login: 'login',
};

const getComponent = ({ avatar_url, login, html_url } = props) => (
  render (
    <MemoryRouter>
      <UserListItemComponent
        login={login}
        html_url={html_url}
        avatar_url={avatar_url}
      />
    </MemoryRouter>
  )
);

describe('<UserListItemComponent /> spec', () => {
  test('should match snapshot', () => {
    const { container } = getComponent();
    expect(container).toMatchSnapshot();
  });

  test('should render img with src from props', () => {
    const { container } = getComponent();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', props.avatar_url);
    expect(img).toHaveAttribute('alt', 'avatar');
  });

  test('should render <Link /> with href from props', () => {
    const { getByText } = getComponent();
    const link = getByText(props.login);
    expect(link).toHaveAttribute('href', `/users/${props.login}`);
  });

  test('should render link with href to address from props', () => {
    const { getByText } = getComponent();
    const githubLink = getByText('Github profile');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', props.html_url);
  });
});