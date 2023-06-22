import React from 'react';
import { render } from '@testing-library/react';
import Progress from './progress';

test('displays progress with correct value and max', () => {
  const { getByRole } = render(<Progress value={50} max={100} />);
  
  expect(getByRole('progressbar')).toHaveAttribute('value', '50');
  expect(getByRole('progressbar')).toHaveAttribute('max', '100');
});
