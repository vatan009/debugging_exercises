import React, { useEffect, useState } from 'react'

function All() {
  const [count, setCount] = useState(0);
  const [t, sett] = useState(0);
  const [start, setStart] = useState(false);

  let timer;

  useEffect(() => {
    if (start) {
      timer = setInterval(() => {
        sett((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [start]);

  return (
    <>
      <p>{t}</p>

      <button onClick={() => setStart(!start)}>Toggle Timer</button>
    </>
  );
}

export default All;


  // useEffect(() => {
  //   document.title = `X : ${count}`;
  // }, [count]);


//question 7
    // setInterval(() => {
  //     sett((prev) => prev + 1);
  // }, 1000)


  // useEffect(
  //  ( ()=> setInterval(() => {
  //     console.log(t);
  //   }, 50))
  // );

  // useEffect(() => {
  //   setInterval(() => {
  //       sett((prev) => prev + 1);
  //   }, 1000)
  // },[])
  // console.log(t)

  //if we use setInterval outside the useEffect it misbehaves


  //question 8
