import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} placeholder="Type your name" />
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}
