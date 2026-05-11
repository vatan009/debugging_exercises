/*

GOAL:
Understand:
render -> effect

TASK:
1. Print:
   "Rendered"

2. Print:
   "Effect Ran"

QUESTION:
Which runs first?

LEARN:
Effects run AFTER render.

*/
import React,{useEffect, useState} from 'react'
export default function Question1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect Ran");
  }, []);
  console.log('Rendered')

  return <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>;
}


