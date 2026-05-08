import { useState } from "react";

export default function Cart() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  function addItem() {
    setCount((count) => {
      let temp = count + 1;
      setTotal(temp * 10);
      return temp;
    });
  }

  return (
    <div>
      <p>Items: {count}</p>
      <p>Total: ${total}</p>
      <button onClick={addItem}>Add Item ($10)</button>
    </div>
  );
}
