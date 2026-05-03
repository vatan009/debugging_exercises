import { useState } from "react";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        placeholder="Rating 1-5"
      />
      {/* { console.log(submitted)} */}
      {submitted ? (
        <p>Thanks for your rating: {rating}</p>
      ) : (
        <button onClick={()=>handleSubmit()}>Submit</button>
      )}
    </div>
  );
}
