import React from "react";
import { useDice } from "./DiceContext";

function ThreeDice() {
  const { threeDice, rollThreeDice } = useDice();
  const [die1, die2, die3] = threeDice;

  const isWinning = die1 === die2 && die2 === die3;

  return (
    <div>
      <h2>Three Dice</h2>
      <div
        style={{
          border: "1px solid #000",
          padding: "10px",
          margin: "10px",
          width: "100%",
          height: "100",
        }}
      >
        <span style={{ margin: "0 10px", fontSize: "2em" }}>{die1}</span>
        <span style={{ margin: "0 10px", fontSize: "2em" }}>{die2}</span>
        <span style={{ margin: "0 10px", fontSize: "2em" }}>{die3}</span>
      </div>
      <button onClick={rollThreeDice}>Re-Roll Three Dice</button>
      <div>{isWinning ? "You Win!" : "Try Again!"}</div>
    </div>
  );
}

export default ThreeDice;
