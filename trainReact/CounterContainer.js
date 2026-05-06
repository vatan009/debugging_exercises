import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay.js";

export default function CounterContainer() {
  // TODO: Count State (initial 0)
  const [count, setCount] = useState(0);

  // TODO: Implement increment function
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // TODO: Implement decrement function
  const decrement = () => {
    0 === count ? null : setCount((prev) => prev - 1);
  };

  return (
    <CounterDisplay increment={increment} decrement={decrement} count={count} />
  );
}
