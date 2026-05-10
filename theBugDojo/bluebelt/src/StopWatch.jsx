import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }, [running]);

  function handleReset() {
    setSeconds(0);
    setRunning(false);
    clearInterval(id);
    setTimeout(() => setRunning(true), 50);
  }

  return (
    <div>
      <p>Elapsed: {seconds}s</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
