import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

test("button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("checkbox flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});
