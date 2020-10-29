import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MiniViewer from './MiniViewer';

describe('<MiniViewer />', () => {
  test('it should mount', () => {
    render(<MiniViewer />);
    
    const miniViewer = screen.getByTestId('MiniViewer');

    expect(miniViewer).toBeInTheDocument();
  });
});