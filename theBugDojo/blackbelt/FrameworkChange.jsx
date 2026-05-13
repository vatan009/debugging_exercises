import { useState, useEffect } from "react";

const ALL = ["React", "Redux", "Recoil", "Relay", "Remix", "Next.js", "Nuxt"];

function useFilter(query) {
  const [results, setResults] = useState(ALL);

  useEffect(() => {
    setResults(
      ALL.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
    );
  }, [query]);

  return results;
}

export default function FrameworkSearch() {
  const [query, setQuery] = useState("");
  const results = useFilter(query);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter frameworks"
      />
      <ul>
        {results.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
