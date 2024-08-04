import { render, screen } from "@testing-library/react";
import Greet from "./greet";
/*
TDD -> It is a software developement process where you write tests before writing the software code
Once the tests have been written, you then write the code to ensure the tests pass
1. Create tests that verify the fucntionality of a specefic feature
2. Write software code that will run the tests sucessfully when re-executed
3. Refactor the code for optmization while ensuring the tests continue to pass
Also called red-green testing as all tests go from a red failed state to agreeen passed state
*/

test("Greet render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet render with a name", () => {
  render(<Greet name="john" />);
  const textElement = screen.getByText(/hello john/i);
  expect(textElement).toBeInTheDocument();
});
