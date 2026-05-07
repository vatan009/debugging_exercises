import React from "react";
export default function Workout({ title, description, time, onComplete }) {
  let temp = React.useRef();
  let [isStarted, setIsStarted] = React.useState(false);
  function handleStartWorkout() {
    // Todo: Start timer
    // setIsStarted(true);
    setIsStarted(true);
    temp.current = setTimeout(() => {
      handleStopWorkout();
    }, Number(time));
  }

  function handleStopWorkout() {
    temp.current && clearTimeout(temp.current);
    setIsStarted(false);
    temp.current && onComplete();
  }
  React.useEffect(() => {
    handleStopWorkout();
  }, []);

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
