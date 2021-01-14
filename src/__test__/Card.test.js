import { fireEvent, render } from "@testing-library/react";
import Card from "../Card";
import React from "react";

test("renders without crashing", function () {
  render(<Card />);
});

test("the snapshot of the page", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
