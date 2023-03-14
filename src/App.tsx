import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChangeColorContext, ChangeColorProvider } from "./Context/ChangeColor";
const Title = () => {
  const context: any = useContext(ChangeColorContext);
  return <h1 style={{ color: context.color }}>123</h1>;
};
const Content = () => {
  return <Title />;
};
const Button = () => {
  const context: any = useContext(ChangeColorContext);
  return <button onClick={context.handleChangeColor}>change</button>;
};
function App({ name }: { name?: string }) {
  return (
    <ChangeColorProvider>
      <div className="App">
        <Button />
        <Content />
        <h1>Job application form</h1>
        <h2>Section 1</h2>
        <p>All fields are mandatory</p>
        <span title="close">X</span>
        <img
          src="https://via.placeholder.com/150"
          alt="a person with a laptop"
        />
        <div data-testid="custom-element">Custom HTML element</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Fullname"
              value="Vishwas"
              onChange={() => {}}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" />
          </div>
          <div>
            <label htmlFor="job-location">Job location</label>
            <select id="job-location">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" id="terms" /> I agree to the terms and
              conditions
            </label>
          </div>
          <button disabled>Submit</button>
        </form>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {`Hello ${name}`}
        </header>
      </div>
    </ChangeColorProvider>
  );
}

export default App;
