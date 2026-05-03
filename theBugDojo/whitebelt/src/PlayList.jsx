import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      // console.log(state)
      return { tracks: [...state.tracks, action.name] };
    case "CLEAR":
      return { tracks: [] };
    default:
      return state;
  }
}

export default function Playlist() {
  const [state, dispatch] = useReducer(reducer, { tracks: [] });
  const [input, setInput] = useState("");

  function handleAdd() {
    if (!input.trim()) return;
    // console.log(input)
    dispatch({ type: "ADD", name: input });
    setInput("");
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Song name..."
      />
      <button onClick={handleAdd}>Add Track</button>
      <ul>
        {/* { console.log(state)} */}
        {state.tracks.map((track, i) => (
          <li key={i}>{track}</li>
        ))}
      </ul>
    </div>
  );
}
