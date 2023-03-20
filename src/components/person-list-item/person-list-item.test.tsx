import React from 'react';
import { render, screen } from '@testing-library/react';
import { PersonListItem } from './index';

test('renders PersonListItem', () => {
  render(
    <PersonListItem
      id="1"
      userName="ali.duru"
      firstName="Ali"
      lastName="Duru"
      phone="532 332 5555"
      policyNo="123"
    />
  );
  const userName = screen.getByText('ali.duru');
  expect(userName).toBeInTheDocument();
  const firstName = screen.getByText('Ali Duru');
  expect(firstName).toBeInTheDocument();
  const phone = screen.getByText('532 332 5555');
  expect(phone).toBeInTheDocument();
  const policyNo = screen.getByText('123', { exact: false });
  expect(policyNo).toBeInTheDocument();
  expect(policyNo.innerHTML.startsWith('Policy No: ')).toBeTruthy();
});
