import { useState, useRef } from "react";

export default function NameEditor() {
  const [name, setName] = useState("Alice");

  const temp = useRef();
  return (
    <div>
      <input
        defaultValue={name}
        onBlur={(e) => setName(e.target.value)}
        ref={temp}
        placeholder="Enter name"
      />
      <p>Saved: {name}</p>
      <button
        onClick={() => {
          temp.current.value = "Alice";
          setName("Alice");
        }}
      >
        Reset
      </button>
    </div>
  );
}
