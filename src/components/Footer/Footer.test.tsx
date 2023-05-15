import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';
import socialMediaData from '@/data/socialMediaData';

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders the logo', () => {
    const logoElement = screen.getByAltText('RD Station logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders all the social media icons with correct href', () => {
    const linkElements = screen.getAllByRole('link', { name: /icon/i });
    expect(linkElements).toHaveLength(socialMediaData.length);

    linkElements.forEach((linkElement, index) => {
      expect(linkElement).toHaveAttribute('href', socialMediaData[index].href);
    });
  });

  test('renders the copyright text', () => {
    const copyrightElement = screen.getByText(/© 2021 RD Station. Política de Privacidade./i);
    expect(copyrightElement).toBeInTheDocument();
  });
});
