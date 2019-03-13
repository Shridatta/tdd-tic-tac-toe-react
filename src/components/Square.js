import React from "react";
const Square = props => {
  return (
    <div
      id="squareDiv"
      className={`square${props.slotNumber}`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Square;
