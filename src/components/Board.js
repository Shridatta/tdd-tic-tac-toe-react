import React, { Component } from "react";
import "./App.css";
import Square from "./Square";
import calculateWinner from "./calculateWinner";

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
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
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
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="board">
        <div className="status">{status}</div>
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
