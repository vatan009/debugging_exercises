import { useState, useRef, useEffect } from "react";

function ActionButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function ShortcutForm() {
  const [log, setLog] = useState([]);
  const btnRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Enter") {
        console.log(btnRef)
        if (btnRef.current) {
          btnRef.current.click();
        } else {
          setLog((prev) => [...prev, "ref is null — shortcut failed"]);
        }
      }
      a;
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
