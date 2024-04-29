import { render, screen } from '@testing-library/react';
import { Header } from "./Header";

test('it renders the header text', () => {
  render(<Header />);
  expect(screen.getByText(`Welcome To Ticketmaster API!`)).toBeInTheDocument()
});
