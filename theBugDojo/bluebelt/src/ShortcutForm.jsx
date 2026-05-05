import { useState, useRef, useEffect, forwardRef } from "react";

const ActionButton = forwardRef(({ onClick, children }, ref) => {
  return (
    <button ref={ref} onClick={onClick}>
      {children}
    </button>
  );
});

export default function ShortcutForm() {
  const [log, setLog] = useState([]);
  const btnRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Enter") {
        if (btnRef.current) {
          handleAction();
        } else {
          setLog((prev) => [...prev, "ref is null — shortcut failed"]);
        }
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function handleAction() {
    setLog((prev) => [...prev, "Action fired"]);
  }

  return (
    <div>
      <ActionButton ref={btnRef} onClick={handleAction}>
        Run Action
      </ActionButton>

      <ul>
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
