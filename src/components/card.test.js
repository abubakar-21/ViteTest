import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';

test('renders title and text', () => {
  const title = 'Test Title';
  const text = 'Test Text';
  const { getByText } = render(<Card title={title} text={text} />);

  const titleElement = getByText(title);
  const textElement = getByText(text);

  expect(titleElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
