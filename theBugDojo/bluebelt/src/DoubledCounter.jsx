import { useState, useEffect } from "react";

export default function DoubledCounter() {
  const [count, setCount] = useState(0);
  const [doubled, setDoubled] = useState(0);

  useEffect(() => {
    setDoubled(count * 2);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
