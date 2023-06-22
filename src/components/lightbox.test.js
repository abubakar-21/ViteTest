import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Lightbox from './lightbox';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

test('renders images and responds to next and prev clicks', () => {
  const onClose = jest.fn();
  const { getByAltText, getByText } = render(<Lightbox images={images} show={true} onClose={onClose} />);
  
  expect(getByAltText('')).toHaveAttribute('src', 'image1.jpg');
  
  fireEvent.click(getByText('Next'));
  expect(getByAltText('')).toHaveAttribute('src', 'image2.jpg');

  fireEvent.click(getByText('Prev'));
  expect(getByAltText('')).toHaveAttribute('src', 'image1.jpg');

  fireEvent.click(getByText('Close'));
  expect(onClose).toHaveBeenCalled();
});
