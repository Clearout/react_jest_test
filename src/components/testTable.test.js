import React from "react";
import { mount } from "enzyme";
import TestTable from "./testTable";

it("TestTable contains a title", () => {
  const testTable = mount(<TestTable title="test" />);
  expect(testTable.props().title).toBeTruthy();
  expect(testTable.props().title).toEqual("test");
  testTable.unmount();
});

it("TestTable includes a list", () => {
  const testTable = mount(<TestTable data={[1, 2, 3, 4]} />);
  expect(testTable.props().data).toBeTruthy();
  expect(testTable.props().data.length).toBeGreaterThan(0);
  expect(testTable.props().data.length).toEqual(4);
  testTable.unmount();
});
