import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Board from "./Board";
configure({ adapter: new Adapter() });

const board = shallow(<Board />);
const wrapper = mount(<Board />);

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
  it("initializes the state with X's turn to play to true", () => {
    expect(board.state().xTurnToPlay).toEqual(true);
  });

  it("should render the the Current Player div", () => {
    expect(board.find(".currentPlayer").exists()).toBeTruthy();
  });

  it("the board should contain 3 rows", () => {
    expect(board.find(".row").length).toEqual(3);
  });

  it("should render all the slots for the board", () => {
    expect(board.find(".squareinit").exists()).toBeTruthy();
  });

  it("should have nine squares", () => {
    const board = mount(<Board squares={Array(9).fill(null)} />);

    expect(board.find("#squareDiv").length).toEqual(9);
  });
});
