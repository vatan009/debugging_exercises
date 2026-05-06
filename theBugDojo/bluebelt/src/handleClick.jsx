import { useRef } from "react";

export default function SecretClicker() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1;
  }

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          width: 120,
          height: 120,
          background: "#4a3f35",
          border: "2px solid #c9a96e",
          cursor: "pointer",
        }}
      >
        Click me
      </div>
      <p>Clicks: {countRef.current}</p>
    </div>
  );
}
