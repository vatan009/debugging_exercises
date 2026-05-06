import { useState, useEffect } from "react";

const USERS = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" },
];

export default function ProfilePanel() {
  const [user, setUser] = useState(USERS[0]);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(`Welcome, ${user.name}!`);
  }, [user]);

  return (
    <div>
      <div>
        {USERS.map((u) => (
          <button key={u.id} onClick={() => setUser(u)}>
            {u.name}
          </button>
        ))}
      </div>
      <p>{greeting}</p>
    </div>
  );
}
