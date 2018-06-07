import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import App from "./App";

it("App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App renders the TestTable component", () => {
  const app = mount(<App />);
  expect(app.find("TestTable")).toBeTruthy();
});
