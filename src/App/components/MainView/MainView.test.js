import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainView from './MainView';

describe('<MainView />', () => {
  test('it should mount', () => {
    render(<MainView />);
    
    const mainView = screen.getByTestId('MainView');

    expect(mainView).toBeInTheDocument();
  });
});