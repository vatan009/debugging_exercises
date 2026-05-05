import { useState, useMemo } from "react";

const ITEMS = ["Apple", "Banana", "Avocado", "Blueberry", "Cherry", "Apricot"];

export default function MemoSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => ITEMS.filter((i) => i.toLowerCase().includes(query.toLowerCase())),
    []
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
