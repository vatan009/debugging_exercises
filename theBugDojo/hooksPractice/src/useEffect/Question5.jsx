// =====================================================
// QUESTION 5 — INPUT TRACKER
// =====================================================

/*

TASK:
1. Input field
2. Print:
   "Typing..."

whenever input changes.

3. Show typed text.

LEARN:
effects reacting to input state : runs on every change

*/

import React, { useEffect, useState } from "react";

export default function Question5() {
  const [count, setcount] = useState(0);
  const [text, settext] = useState("");
  useEffect(() => {
    console.log("Typing",{text});
  }, [text]);

  return (
    <>
      <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
      {/* <input type="text" />
      <button onClick={()=>setcount((count)=>count+1)}>Click ME</button>
      <button>Click ME</button> */}
    </>
  );
}
