import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './src/index'; 
describe('Frontend Tests', () => {
  it('should render the Weather component', async () => {
    render(<Weather />);
    const iconElement = screen.getByAltText('Weather Icon');
    expect(iconElement).toBeInTheDocument();
  });
});
