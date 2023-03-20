import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './index';

test('renders PersonListItem', async () => {
  const onChange = jest.fn();
  render(<Search text="ALI" onChange={onChange} />);
  const inputElem = screen.getByPlaceholderText<HTMLInputElement>(
    'SEARCH (Client Name / Policy Number)'
  );
  expect(inputElem).toBeInTheDocument();
  expect(inputElem.value).toBe('ALI');
  fireEvent.change(inputElem, {
    target: {
      value: 'ALI DURU',
    },
  });
  expect(onChange).toBeCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('ALI DURU');
});
