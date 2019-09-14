import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserListComponent from './UserListComponent';

jest.mock('../../../../hooks/useLoadUsers');

afterEach(cleanup);

const getComponent = () => (
  render(
    <MemoryRouter>
      <UserListComponent />
    </MemoryRouter>
  )
);

test('should render without errors', () => {
  getComponent();
});