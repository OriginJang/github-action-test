import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('Fail test case', () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
