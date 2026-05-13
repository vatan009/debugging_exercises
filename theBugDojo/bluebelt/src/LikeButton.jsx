import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LIKE":
      return { liked: true, count: state.count + 1 };
    case "UNLIKE":
      return { liked: false, count: state.count - 1 };
    default:
      return state;
  }
}

export default function LikeButton() {
  const [state, dispatch] = useReducer(reducer, { liked: false, count: 0 });

  function handleClick() {
    dispatch({ type: state.liked ? "UNLIKE" : "LIKE" });
  }

  return (
    <div>
      <button onClick={handleClick}>{state.liked ? "Unlike" : "Like"}</button>
      <p>Likes: {state.count}</p>
    </div>
  );
}
