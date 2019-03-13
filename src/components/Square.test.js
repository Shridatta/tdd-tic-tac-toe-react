import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Square from "./Square";

configure({ adapter: new Adapter() });

const square = shallow(<Square />);

describe("when rendering the Square", () => {
  it("should render the square div", () => {
    const square = shallow(<Square value="" />);
    expect(square.text()).toEqual("");
  });

  it("should have value as X when it is X ", () => {
    const squareX = shallow(<Square value="X" />);
    expect(squareX.text()).toEqual("X");
  });
});
