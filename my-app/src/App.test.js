import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the home page by default', () => {
  render(<App />);
  expect(screen.getByText(/learn\. code\. succeed\./i)).toBeInTheDocument();
});

test('shows the selected page when a navbar item is clicked', () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /about us/i }));

  expect(screen.getByRole('heading', { name: /about us page/i })).toBeInTheDocument();
});
