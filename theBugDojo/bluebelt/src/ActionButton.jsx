import { useState, useRef, memo } from "react";

const ActionButton = memo(function ActionButton({ label, onClick }) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <button onClick={onClick}>
      {label} (renders: {renderCount.current})
    </button>
  );
});

export default function SearchPanel() {
  const [query, setQuery] = useState("");

  function handleAction() {
    alert("Action!");
  }

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ActionButton label="Go" onClick={handleAction} />
    </div>
  );
}
