import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Square from "./Square";

configure({ adapter: new Adapter() });

const square = shallow(<Square />);

describe("when rendering the Square", () => {
  it("should render the square div", () => {
    expect(square.find(".squareDiv").exists()).toBeTruthy();
  });

  it("should have x turn to play true on initial click ", () => {
    square.find(".squareDiv").simulate("click");
    expect(square.state().xTurnToPlay).toEqual(true);
  });
});
