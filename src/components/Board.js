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
    return <div className="board">Board</div>;
  }
}

export default Board;
