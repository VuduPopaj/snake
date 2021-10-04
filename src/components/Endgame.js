import React from "react";

//props

function Endgame(props) {
  setSpeed(null);
  setGameOver(true);
  if (points > totalPoints) {
    setTotalPoints(points);
  }
  setPoints(0);

  return <div></div>;
}

export default Endgame;
