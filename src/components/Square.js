import React from "react";
const Square = props => {
  return (
    <div className="squareDiv" className={`square${props.slotNumber}`}>
      {props.slotNumber}
    </div>
  );
};

export default Square;
