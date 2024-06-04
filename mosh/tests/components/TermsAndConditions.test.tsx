import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };

  it("should render with correct text and initial state", () => {
    const { heading, checkbox, button } = renderComponent();

    // expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    expect(checkbox).not.toBeChecked();

    // expect(button).toHaveTextContent(/submit/i); text might differ so no need to check aon
    expect(button).toBeDisabled();
  });

  it("should enable the button when checkbox is checked", async () => {
    const { checkbox, button } = renderComponent();

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
