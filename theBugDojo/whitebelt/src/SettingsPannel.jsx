import { useState } from "react";

const DEFAULTS = { theme: "dark", fontSize: 16, notifications: true };

export default function SettingsPanel() {
  const [userPrefs, setUserPrefs] = useState({ theme: "light" });

  const active = { ...userPrefs, ...DEFAULTS };

  function handleToggle() {
    console.log(userPrefs)
    setUserPrefs((p) => ({
      ...p,
      theme: p.theme === "dark" ? "light" : "dark",
    }));
  }

  return (
    <div>
      <p>Theme: {userPrefs.theme}</p>
      <p>Font size: {active.fontSize}</p>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
}
