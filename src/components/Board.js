import React, { Component } from "react";
import "./App.css";
import Square from "./Square";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xTurnToPlay: true
    };
    console.log(this.state);
  }

  renderSlot(i) {
    return <Square />;
  }
  render() {
    return (
      <div className="board">
        Board <br />
        <div className="currentPlayer">The current player is</div>
        <div className="row" />
        <div className="row">Row 2</div>
        <div className="row">Row 3</div>
      </div>
    );
  }
}

export default Board;
