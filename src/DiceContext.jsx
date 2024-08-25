import React, { createContext, useState, useContext } from "react";

const DiceContext = createContext();

export function DiceProvider({ children }) {
  const [twoDice, setTwoDice] = useState([1, 3]);
  const [threeDice, setThreeDice] = useState([3, 3, 1]);

  const rollTwoDice = () => {
    setTwoDice([
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ]);
  };

  const rollThreeDice = () => {
    setThreeDice([
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ]);
  };

  return (
    <DiceContext.Provider
      value={{ twoDice, threeDice, rollTwoDice, rollThreeDice }}
    >
      {children}
    </DiceContext.Provider>
  );
}

export function useDice() {
  return useContext(DiceContext);
}
