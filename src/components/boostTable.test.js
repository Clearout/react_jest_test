import React from "react";
import { mount } from "enzyme";
import BoostTable from "./boostTable";

it("BoostTable contains a title", () => {
  const boostTable = mount(<BoostTable title="test" />);
  expect(boostTable.props().title).toBeTruthy();
  expect(boostTable.props().title).toEqual("test");
  boostTable.unmount();
});

it("BoostTable includes a list", () => {
  const boostTable = mount(<BoostTable data={[1, 2, 3, 4]} />);
  expect(boostTable.props().data).toBeTruthy();
  expect(boostTable.props().data.length).toBeGreaterThan(0);
  expect(boostTable.props().data.length).toEqual(4);
  boostTable.unmount();
});
