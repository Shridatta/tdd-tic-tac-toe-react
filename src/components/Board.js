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

  handleClick(i) {
    const squares = this.state.squares.slice();
    console.log(this.state);
    squares[i] = this.state.xTurnToPlay ? "X" : "O";
    this.setState({
      squares: squares,
      xTurnToPlay: !this.state.xTurnToPlay
    });
  }

  renderSlot(i) {
    return (
      <Square
        className="squareinit"
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        slotNumber={i}
      />
    );
  }
  render() {
    return (
      <div className="board">
        Board <br />
        <div className="currentPlayer">The current player is</div>
        <div className="row">
          {this.renderSlot(0)} {this.renderSlot(1)} {this.renderSlot(2)}
        </div>
        <div className="row">
          {this.renderSlot(3)} {this.renderSlot(4)} {this.renderSlot(5)}
        </div>
        <div className="row">
          {this.renderSlot(6)} {this.renderSlot(7)} {this.renderSlot(8)}
        </div>
      </div>
    );
  }
}

export default Board;
