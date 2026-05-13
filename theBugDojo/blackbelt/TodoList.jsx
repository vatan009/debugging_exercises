// The `TOGGLE` case wrote directly to `state.items[action.index].done` and then returned the same `state` reference — React compares the object returned by the reducer against the previous state using reference equality, and because it was the exact same object, React concluded nothing had changed and skipped the re-render entirely, leaving the UI frozen despite the internal mutation having occurred. Replacing that with an immutable update — `state.items.map((item, i) => i === action.index ? { ...item, done: !item.done } : item)` wrapped in a new state object — produces a new reference at every level: a new item object, a new items array, and a new state object. React detects the reference change at the top level, schedules a re-render, and the button label and strikethrough style update to reflect the toggled value.
import { useReducer } from "react";

const INITIAL = {
  items: [
    { id: 1, text: "Buy groceries", done: false },
    { id: 2, text: "Walk the dog", done: false },
    { id: 3, text: "Read a book", done: false },
  ],
};

function reducer(state, action) {
  console.log(state.items[action.index]);

  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        items: state.items.map((e, idx) => {
          if (idx === action.index) {
            return { ...e, done: !e.done };
          }
          return e;
        }),
      };
      return temp;
    default:
      return state;
  }
}

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, INITIAL);

  return (
    <div>
      {state.items.map((item, index) => (
        <div key={item.id}>
          <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
            {item.text}
          </span>
          <button onClick={() => dispatch({ type: "TOGGLE", index })}>
            {console.log(item)}
            {item.done ? "Undo" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
