import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Board from "./Board";

configure({ adapter: new Adapter() });

const board = shallow(<Board />);

describe("when rendering the app", () => {
  it("renders Board correctly", () => {
    expect(board).toMatchSnapshot();
  });

  it("initializes the board state with null", () => {
    expect(board.state().squares).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
  });
});
