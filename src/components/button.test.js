import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

test('renders button and responds to click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button color="blue" disabled={false} onClick={handleClick}>Test Button</Button>);
  
  fireEvent.click(getByText('Test Button'));

  expect(handleClick).toHaveBeenCalled();
});

test('renders disabled button and does not respond to click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button color="blue" disabled={true} onClick={handleClick}>Test Button</Button>);
  
  fireEvent.click(getByText('Test Button'));

  expect(handleClick).not.toHaveBeenCalled();
});
