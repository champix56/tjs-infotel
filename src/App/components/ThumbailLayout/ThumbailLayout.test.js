import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThumbailLayout from './ThumbailLayout';

describe('<ThumbailLayout />', () => {
  test('it should mount', () => {
    render(<ThumbailLayout />);
    
    const thumbailLayout = screen.getByTestId('ThumbailLayout');

    expect(thumbailLayout).toBeInTheDocument();
  });
});