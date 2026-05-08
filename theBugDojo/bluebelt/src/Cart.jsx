import { useState } from "react";

export default function Cart() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  function addItem() {
    setCount(count + 1);
    setTotal(total + count * 10);
  }

  return (
    <div>
      <p>Items: {count}</p>
      <p>Total: ${total}</p>
      <button onClick={addItem}>Add Item ($10)</button>
    </div>
  );
}
