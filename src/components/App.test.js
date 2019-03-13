import React from "react";
import { shallow, configure, mount } from "enzyme";
import App from "../components/App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const app = shallow(<App />);

describe("when rendering the app", () => {
  it("App renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("Has the Board component", () => {
    expect(app.find(".boardComponent").exists()).toBeTruthy();
  });

  it("contains the TicTacToe Header", () => {
    expect(app.find(".tictactoeHeader").exists()).toBeTruthy();
  });
  /*
  it("renders the Current Player Correctly", () => {
    const wrapper = mount(<App />);
    const firstPlayer = wrapper
      .find(".currentPlayer")
      .children()
      .first()
      .text();
    expect(firstPlayer).toEqual("The Current player is X");
  });

  it("renders the Current Player as O", () => {
    const div = wrapper.find("div.square").first();
    div.simulate("click");
    const secondPlayer = wrapper
      .find("div.game-info")
      .children()
      .first()
      .text();
    expect(secondPlayer).toEqual("The Current player is O");
  });*/
});
