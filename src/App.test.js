import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import App from "./App";

it("App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App renders the BoostTable component", () => {
  const app = mount(<App />);
  expect(app.find("BoostTable")).toBeTruthy();
});
