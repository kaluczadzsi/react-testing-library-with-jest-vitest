import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import SummaryForm from "../SummaryForm";

describe("SummaryForm tests", () => {
  test("initial conditions", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  test("checkbox enables button on first click and disables on second click", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();

    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();
    await user.unhover(termAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
