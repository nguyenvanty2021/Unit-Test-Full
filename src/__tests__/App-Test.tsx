import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
// viết test cách 3 là bỏ trong folder __tests__
// nếu dùng .spec thì dùng it('')
// tương tự test là describe.only or describe.skip
describe("Greet", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Renders correctly", () => {
    render(<App />);
    //const textElement = screen.getByText("Learn React");
    const textElement = screen.getByText(/Learn React/i);
    expect(textElement).toBeInTheDocument();
  });
  // nếu dùng test.only('', () =>{}) là bỏ qua test này or test.skip
  it("Renders with a name", () => {
    render(<App name="Vishwas" />);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
  });
});
