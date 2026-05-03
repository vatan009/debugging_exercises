import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");
  function handleInput(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <input value={name} placeholder="Type your name"   onChange={handleInput}/>
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}
