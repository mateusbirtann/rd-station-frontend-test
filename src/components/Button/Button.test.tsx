import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Button from './index';

describe('Button Component', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();  
    const { getByText } = render(<Button onClick={handleClick}>Test</Button>);
    fireEvent.click(getByText('Test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom class if provided', () => {
    const { getByText } = render(<Button className="custom-class">Test</Button>);
    expect(getByText('Test')).toHaveClass('custom-class');
  });

  it('applies custom size if provided', () => {
    const { getByText } = render(<Button size="custom">Test</Button>);
    expect(getByText('Test')).not.toHaveClass('w-sm h-sm');
  });
});
