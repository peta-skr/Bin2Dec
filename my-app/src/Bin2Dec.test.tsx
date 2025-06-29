import { render, screen, fireEvent } from "@testing-library/react";
import Bin2Dec from "./Bin2Dec";
import "@testing-library/jest-dom";

test("converts valid binary input", () => {
  render(<Bin2Dec />);
  const input = screen.getByPlaceholderText(/binary/i);
  fireEvent.change(input, { target: { value: "1010" } });

  const button = screen.getByRole("button", { name: /Convert/i });
  fireEvent.click(button);

  expect(screen.getByText(/decimal/i)).toHaveTextContent("Decimal: 10");
});

test("shows error for invalid input", () => {
  render(<Bin2Dec />);
  const input = screen.getByPlaceholderText(/binary/i);
  fireEvent.change(input, { target: { value: "102" } });

  const button = screen.getByRole("button", { name: /Convert/i });
  fireEvent.click(button);

  expect(
    screen.getByText(/Please enter a valid binary number \(up to 8 digits\)\./i)
  ).toBeInTheDocument();
});

test("shows error for empty input", () => {
  render(<Bin2Dec />);
  const button = screen.getByRole("button", { name: /Convert/i });
  fireEvent.click(button);

  expect(
    screen.getByText(/Please enter a valid binary number \(up to 8 digits\)\./i)
  ).toBeInTheDocument();
});

test("shows error for input longer than 8 digits", () => {
  render(<Bin2Dec />);
  const input = screen.getByPlaceholderText(/binary/i);
  fireEvent.change(input, { target: { value: "111111111" } });

  const button = screen.getByRole("button", { name: /Convert/i });
  fireEvent.click(button);

  expect(
    screen.getByText(/Please enter a valid binary number \(up to 8 digits\)\./i)
  ).toBeInTheDocument();
});

test("shows error for input with non-binary characters", () => {
  render(<Bin2Dec />);
  const input = screen.getByPlaceholderText(/binary/i);
  fireEvent.change(input, { target: { value: "abc" } });

  const button = screen.getByRole("button", { name: /Convert/i });
  fireEvent.click(button);

  expect(
    screen.getByText(/Please enter a valid binary number \(up to 8 digits\)\./i)
  ).toBeInTheDocument();
});

test("handles leading zeros correctly", () => {
  render(<Bin2Dec />);
  const input = screen.getByPlaceholderText(/binary/i);
  fireEvent.change(input, { target: { value: "00001010" } });

  const button = screen.getByRole("button", { name: /Convert/i });
  fireEvent.click(button);

  expect(screen.getByText(/decimal/i)).toHaveTextContent("Decimal: 10");
});

test("handles maximum binary input of 8 digits", () => {
  render(<Bin2Dec />);
  const input = screen.getByPlaceholderText(/binary/i);
  fireEvent.change(input, { target: { value: "11111111" } });

  const button = screen.getByRole("button", { name: /Convert/i });
  fireEvent.click(button);

  expect(screen.getByText(/decimal/i)).toHaveTextContent("Decimal: 255");
});
