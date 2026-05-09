import { useState, useRef, memo } from "react";

const ThemeDisplay = memo(function ThemeDisplay({ config }) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <div>
      <p>Theme: {config.theme}</p>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
});

export default function SettingsPanel() {
  const [query, setQuery] = useState("");

  const config = { theme: "dark" };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search settings..."
      />
      <ThemeDisplay config={config} />
    </div>
  );
}
