import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders welcome message', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Bem-vindo à React Social Network!/i);
  expect(linkElement).toBeInTheDocument();
});

