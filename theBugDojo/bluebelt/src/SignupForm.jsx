import { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");

  const NameField = ({ value, onChange }) => (
    <div>
      <label>Name</label>
      <input value={value} onChange={onChange} placeholder="Enter your name" />
    </div>
  );

  return (
    <div>
      <NameField value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}
