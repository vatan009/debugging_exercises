// =====================================================
// QUESTION 3 — EFFECT ON STATE CHANGE
// =====================================================

/*

TASK:
1. Create counter
2. Print:
   "Count Changed"

ONLY when count changes.

LEARN:
dependency array values

*/
import React, { useEffect, useState } from 'react'

export default function Question3() {
   const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  console.log('Rendered')

   return (
     <>
       <button onClick={() => setCount((prev) => prev + 1)}>Click</button>;
       <button onClick={()=>setCount(count)}>Count not changing</button>;
     </>
   );
   }


