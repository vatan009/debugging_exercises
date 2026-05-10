import { useState, useRef, memo } from "react";

export default function SettingsPanel() {
  const [query, setQuery] = useState("");

  const config = { theme: "dark" };

  const ThemeDisplay = memo(
    function ThemeDisplay({ config }) {
      const renderCount = useRef(0);
      renderCount.current += 1;
      return (
        <div>
          <p>Theme: {config.theme}</p>
          <p>Render count: {renderCount.current}</p>
        </div>
      );
    },
    [config],
  );

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
