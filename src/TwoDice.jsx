import React from "react";
import { useDice } from "./DiceContext";

function TwoDice() {
  const { twoDice, rollTwoDice } = useDice();
  const [die1, die2] = twoDice;

  const isWinning = die1 < 4 && die2 < 4;

  return (
    <div>
      <h2>Two Dice</h2>
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
      </div>
      <button onClick={rollTwoDice}>Re-Roll Two Dice</button>
      <div>{isWinning ? "You Win!" : "Try Again!"}</div>
    </div>
  );
}

export default TwoDice;
