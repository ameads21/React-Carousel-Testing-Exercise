import { fireEvent, render } from "@testing-library/react";
import Carousel from "../Carousel";
import React from "react";

test("renders without crashing", function () {
  render(<Carousel />);
});

test("the snapshot of the page", function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

// test("the arrow buttons the functions they bring", function () {
//   const { getByText, getByTestId, debug } = render(<Carousel />);
//   const small = getByText("Image 1 of 3.");
//   const rBtn = getByTestId("right-arrow");
//   fireEvent.click(rBtn);
//   const lBtn = getByTestId("left-arrow");
//   expect(small).toHaveTextContent("2");
//   fireEvent.click(lBtn);
//   expect(small).toHaveTextContent("1");
// });

test("the existance of the left arrow button", function () {
  const { queryByTestId } = render(<Carousel />);
  const rBtn = queryByTestId("right-arrow");
  expect(queryByTestId("left-arrow")).toBe(null);
  fireEvent.click(rBtn);
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
});

test("the existance of the left arrow button", function () {
  const { queryByTestId } = render(<Carousel />);
  const rBtn = queryByTestId("right-arrow");
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
  fireEvent.click(rBtn);
  fireEvent.click(rBtn);
  expect(queryByTestId("right-arrow")).toBe(null);
});
