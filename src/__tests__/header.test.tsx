import { render, screen } from "@testing-library/react";
import HeaderComponent from "../components/header";

it("renders learn react link", async () => {
  render(<HeaderComponent title="My Header" />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});
it("renders learn react link 1", async () => {
  render(<HeaderComponent title="My Header" />);
  const headingElement = screen.getByRole("heading"); // or getAllByRole
  expect(headingElement).toBeInTheDocument();
});
it("renders learn react link 4", async () => {
  render(<HeaderComponent title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});
it("renders learn react link 3", async () => {
  render(<HeaderComponent title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});
it("renders learn react link 2", async () => {
  render(<HeaderComponent title="My Header" />);
  const headingElement = screen.getByRole("heading", {
    name: "My Header",
  });
  expect(headingElement).toBeInTheDocument();
});
