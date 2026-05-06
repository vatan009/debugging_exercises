import { useState } from "react";

export default function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  function handleChange(e) {
    const val = e.target.value;
    setQuery((prevQuery) => {
      let newQuery = val;
      setTimeout(() => {
        setResult(`Results for: ${newQuery}`);
      }, 0);
      return newQuery;
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      <p>{result || "Type to search"}</p>
    </div>
  );
}
