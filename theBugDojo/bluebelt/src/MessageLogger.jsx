import { useState, useCallback } from "react";

export default function MessageLogger() {
  const [message, setMessage] = useState("");
  const [log, setLog] = useState([]);

  const handleLog = useCallback(() => {
    setLog((prev) => [...prev, message]);
  }, [message]);

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />
      <button onClick={handleLog}>Log</button>
      <ul>
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
