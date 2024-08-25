import React from "react";
import { DiceProvider } from "./DiceContext";
import TwoDice from "./TwoDice";
import ThreeDice from "./ThreeDice";

function App() {
  return (
    <DiceProvider>
      <div
        style={{ textAlign: "center", marginTop: "50px", marginLeft: "500px" }}
      >
        <h1 style={{ marginLeft: "20px" }}>Dice Game</h1>
        <TwoDice />
        <ThreeDice />
      </div>
    </DiceProvider>
  );
}

export default App;
