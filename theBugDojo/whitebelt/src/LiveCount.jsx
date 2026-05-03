import { useState, useEffect } from "react";

export default function LiveCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const next = count + 1;
    setCount(next);
  }, [count]);

  return <p>Server count: {count}</p>;
}
