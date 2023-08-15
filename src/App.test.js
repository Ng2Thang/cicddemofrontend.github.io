import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('show Now text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React Feature 2.8/i);
  expect(linkElement).toBeInTheDocument();
});
