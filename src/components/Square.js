import React from "react";
const Square = props => {
  return (
    <div
      id={props.slotNumber}
      className={`square${props.slotNumber}`}
      uni={props.slotNumber}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Square;
