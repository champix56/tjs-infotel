import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Viewer from './Viewer';

describe('<Viewer />', () => {
  test('it should mount', () => {
    render(<Viewer />);
    
    const viewer = screen.getByTestId('Viewer');

    expect(viewer).toBeInTheDocument();
  });
});