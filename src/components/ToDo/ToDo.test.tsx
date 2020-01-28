import React from 'react';
import { render } from '@testing-library/react';
import ToDo from './ToDo';

test('renders learn react link', () => {
  const { getByText } = render(<ToDo text="test" status="pending" />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});