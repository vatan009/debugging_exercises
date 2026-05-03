import { useState, useEffect } from "react";

const ITEMS = ["Apple", "Banana", "Avocado", "Blueberry", "Cherry", "Apricot"];

export default function SearchList() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(ITEMS);

  useEffect(() => {
    setResults(
      ITEMS.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
    );
  }, []);

  return (
    <div>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
