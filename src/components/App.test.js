import React from "react";
import { shallow, configure } from "enzyme";
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
});
