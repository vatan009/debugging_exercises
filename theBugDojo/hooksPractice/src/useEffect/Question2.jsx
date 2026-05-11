// =====================================================
// QUESTION 2 — RUN ONLY ONCE
// =====================================================

/*

TASK:
1. Create counter
2. Print:
   "Mounted"

ONLY once.

3. Click button many times.

QUESTION:
Why does effect not rerun?

LEARN:
[] dependency array

*/
import React,{useEffect, useState} from 'react'
export default function Question2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("<Mounted>");
  }, []);
  console.log('Rendered')

  return <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>;
}


