import { useState } from "react";

export default function SecretMessage() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && <p>The secret is: React re-renders on state change.</p>}
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Secret" : "Show Secret"}
      </button>
    </div>
  );
}
