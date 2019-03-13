import React, { Component } from "react";
import "./App.css";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="tictactoeHeader"> TicTacToe Game</h1>
        <Board className="boardComponent" />
      </div>
    );
  }
}

export default App;
