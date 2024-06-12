import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render same text passed into title prop", () => {
    render(<MockTodo />);

    addTask(["go grocery shopping"]);

    const divElement = screen.getByText(/go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", () => {
    render(<MockTodo />);

    addTask(["go grocery shopping", "pet my cat", "wash my hands"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<MockTodo />);

    addTask(["go grocery shopping"]);

    const divElement = screen.getByText(/go grocery shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
    render(<MockTodo />);

    addTask(["go grocery shopping"]);

    const divElement = screen.getByText(/go grocery shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
