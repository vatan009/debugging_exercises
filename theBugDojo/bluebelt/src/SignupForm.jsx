// Why this fixes it

// Defining NameField inside SignupForm's function body means a new function is created on every render. React identifies component types by reference - when the reference changes between renders, React treats the old and new as different component types entirely, unmounts the old one including its DOM node and focus state, and mounts a fresh one. Moving NameField to module scope gives it a single stable reference that never changes. React now sees the same type on every render, updates the existing component in place, and focus is never lost.

import { useState } from "react";

const NameField = ({ value, onChange }) => (
  <div>
    <label>Name</label>
    <input value={value} onChange={onChange} placeholder="Enter your name" />
  </div>
);

export default function SignupForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <NameField value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}
