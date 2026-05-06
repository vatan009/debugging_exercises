import { useState } from "react";

export default function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: "Alice",
    email: "alice@example.com",
  });

  function handleNameChange(e) {
    let temp = e.target.value;
    setProfile({ ...profile, name: temp });
  }

  return (
    <div>
      <input value={profile.name} onChange={handleNameChange} />
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}
