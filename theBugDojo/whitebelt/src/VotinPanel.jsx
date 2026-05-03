import { useState } from "react";

const INITIAL = [
  { id: 1, label: "Option A", score: 0 },
  { id: 2, label: "Option B", score: 0 },
  { id: 3, label: "Option C", score: 0 },
];

export default function VotingPanel() {
  const [options, setOptions] = useState(INITIAL);

  function handleVote(id) {
    const target = options.find((o) => o.id === id);
    // target.score += 1;
    setOptions((options) =>
      options.map((item) =>
        item === target ? { ...item, score: item.score + 1 } : item,
      ),
    );
  }

  return (
    <div>
      {options.map((option) => (
        <div key={option.id}>
          <span>{option.label}: {option.score}</span>
          <button onClick={() => handleVote(option.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
}
