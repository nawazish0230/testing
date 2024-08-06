import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // we can test it by name but for heading we have option of level as well
    const pageElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageElement).toBeInTheDocument();

    const sectionElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionElement).toBeInTheDocument();

    // as we have input & textarea and both role is textbox so picking it by name
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termElement = screen.getByRole("checkbox");
    expect(termElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
