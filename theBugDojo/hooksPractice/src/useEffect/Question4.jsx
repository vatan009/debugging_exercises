// =====================================================
// QUESTION 4 — MULTIPLE DEPENDENCIES
// =====================================================

/*

TASK:
1. Create:
   - count state
   - text state

2. Effect should run when:
   - count changes
   - OR text changes

QUESTION:
What happens if one dependency is removed? : component doesnt rerenders if removed component is changed

*/
import React,{useEffect, useState} from 'react'

export default function Question4() {
   const [count, setcount] = useState(0)
   const [text, settext] = useState('')
   useEffect(() => {
      console.log('effect ran')
   },[count])


  return (
    <>
      <input type="text" onChange={(e) => settext(e.target.value)} />
      <input type="text" />
      <button onClick={()=>setcount((count)=>count+1)}>Click ME</button>
      <button>Click ME</button>
    </>
  );
}
