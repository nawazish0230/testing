import { render, screen } from '@testing-library/react';
import Greet from './greet';

describe('Greet', () => {
  test('Greet render correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe('Nested', () => {
  // test.only -> only this test will run
  // test.skip -> doing this will skip the test
  test('Greet render with name', () => {
    render(<Greet name="john" />);
    const textElement = screen.getByText(/hello john/i);
    expect(textElement).toBeInTheDocument();
  });
});
