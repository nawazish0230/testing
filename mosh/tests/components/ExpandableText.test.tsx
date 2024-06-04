import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import userEvent from "@testing-library/user-event";
import ExpandableText from "../../src/components/ExpandableText";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const truncatedText = longText.substring(0, limit) + "...";

  it("should render the full text if less than 255 characters", () => {
    const text = "short text";
    render(<ExpandableText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should truncate text if longer than 255 characters", () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });

  it("should expand text when Show More button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("should collapse text when Show Less button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const showMoreButton = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    const ShowLessButton = screen.getByRole("button", { name: /less/i });
    await user.click(ShowLessButton);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(showMoreButton).toHaveTextContent(/more/i);
  });
});
