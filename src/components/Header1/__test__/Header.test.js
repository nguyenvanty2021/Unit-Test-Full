import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });
});

it("should render same text passed into title prop", () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByRole("heading");
  expect(h1Element).toBeInTheDocument();
});

it("should render same text passed into title prop 1", () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByRole("heading", { name: /todo/i });
  expect(h1Element).toBeInTheDocument();
});

it("should render same text passed into title prop 2", () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByTitle("Header");
  expect(h1Element).toBeInTheDocument();
});

it("should render same text passed into title prop 3", () => {
  render(<Header title="todo" />);
  const h2Element = screen.getByTestId("header-1");
  expect(h2Element).toBeInTheDocument();
});

// // WITH FINDBY

it("should render same text passed into title prop 4", async () => {
  render(<Header title="todo" />);
  const h1Element = await screen.findByText(/todo/i);
  expect(h1Element).toBeInTheDocument();
});
// // WITH GETALLBY

it("should render same text passed into title prop 5", () => {
  render(<Header title="todo" />);
  const h1Elements = screen.getAllByText(/todo/i);
  expect(h1Elements.length).toBe(1);
});
