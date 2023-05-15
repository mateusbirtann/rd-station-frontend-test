// __tests__/Slider.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Slider from './index';

describe('Slider Component', () => {
  it('renders properly', () => {
    const cards = {
      cards: [
        {
          icon: '/path/to/icon1.png',
          title: 'Card 1',
          subtitle: 'Subtitle 1',
        },
        {
          icon: '/path/to/icon2.png',
          title: 'Card 2',
          subtitle: 'Subtitle 2',
        },
        {
          icon: '/path/to/icon3.png',
          title: 'Card 3',
          subtitle: 'Subtitle 3',
        },
      ],
    };

    render(<Slider {...cards} />);

    const card1Title = screen.getByText(/Card 1/i);
    expect(card1Title).toBeInTheDocument();

    const card2Subtitle = screen.getByText(/Subtitle 2/i);
    expect(card2Subtitle).toBeInTheDocument();
  });
});
