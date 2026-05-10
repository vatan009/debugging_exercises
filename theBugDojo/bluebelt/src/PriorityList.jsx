import { useState, memo, useCallback } from "react";

const INITIAL = [
  { id: 1, value: "Design" },
  { id: 2, value: "Development" },
  { id: 3, value: "Testing" },
  { id: 4, value: "Deployment" },
];

const ItemRow2 = function ItemRow2({ label, onMoveUp, isFirst }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{label}</span>

      <button onClick={() => setCount((c) => c + 1)}>Reviewed: {count}</button>

      {!isFirst && <button onClick={onMoveUp}>Move Up</button>}
    </div>
  );
};

export default function PriorityList() {
  const [items, setItems] = useState(INITIAL);

  const handleMoveUp = useCallback((index) => {
    setItems((prev) => {
      const next = [...prev];

      [next[index - 1], next[index]] = [next[index], next[index - 1]];

      return next;
    });
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <ItemRow2
          key={item.id}
          label={item.value}
          onMoveUp={() => handleMoveUp(index)}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}
