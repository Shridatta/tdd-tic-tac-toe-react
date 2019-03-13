import React, { Component } from "react";
import "./App.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xTurnToPlay: true
    };
    console.log(this.state);
  }
  render() {
    return (
      <div className="board">
        Board <br />
        <div className="currentPlayer">The current player is</div>
      </div>
    );
  }
}

export default Board;
