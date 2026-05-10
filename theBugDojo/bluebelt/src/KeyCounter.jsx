import { useState, useEffect } from "react";

export default function KeyCounter() {
  const [keyCount, setKeyCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    function handleKey() {
      setKeyCount((k) => k + 1);
    }
    window.addEventListener("keydown", handleKey);
  }, []);

  return (
    <div>
      <p>Keys pressed: {keyCount}</p>
      <p>Button clicks: {clicks}</p>
      <button onClick={() => setClicks((c) => c + 1)}>Re-render</button>
    </div>
  );
}
