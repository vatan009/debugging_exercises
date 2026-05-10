import { useState, useMemo } from "react";

const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];

export default function NameFilter() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [runLog, setRunLog] = useState(0);

  const filtered = useMemo(() => {
    setRunLog((r) => r + 1);
    return NAMES.filter((n) => n.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search names..."
      />
      <button onClick={() => setCount((c) => c + 1)}>Clicked: {count}</button>
      <p>
        Filter ran: {runLog} time{runLog !== 1 ? "s" : ""}
      </p>
      <ul>
        {filtered.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
