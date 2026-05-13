import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { notes: [...state.notes, { id: Date.now(), text: action.text }] };
    // case "EDIT":
    //   return {notes:[state.notes.map((index,e)=>{
    //     if (e.id===action.id){
    //       return {...e,text:action.text}
    //     }
    //     return e;
    //   }) ]};
    case "EDIT":
      return {
        notes: state.notes.map((e, index) => {
          if (e.id === action.id) {
            return { ...e, text: action.text };
          }

          return e;
        }),
      };
    default:
      return state;
  }
}

export default function NoteEditor() {
  const [state, dispatch] = useReducer(reducer, { notes: [] });
  const [draft, setDraft] = useState("");
  const [editing, setEditing] = useState(null);

  function handleAdd() {
    if (!draft.trim()) return;
    dispatch({ type: "ADD", text: draft });
    setDraft("");
  }

  function handleSave(id, text) {
    dispatch({ type: "EDIT", id, text });
    setEditing(null);
  }

  return (
    <div>
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="New note"
      />
      <button onClick={handleAdd}>Add</button>
      {state.notes.map((note) => (
        <div key={note.id}>
          {editing === note.id ? (
            <input
              defaultValue={note.text}
              onBlur={(e) => handleSave(note.id, e.target.value)}
            />
          ) : (
            <span>{note.text}</span>
          )}
          <button onClick={() => setEditing(note.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
// The `EDIT` case used `[...state.notes, { id: action.id, text: action.text }]`, which appended a new object to the array instead of replacing the existing one — the note with the matching `id` was never removed, so every save produced a duplicate entry below the original. Replacing that line with `state.notes.map(n => n.id === action.id ? { ...n, text: action.text } : n)` iterates the existing array and returns a new object only for the item whose `id` matches, leaving all other items untouched. The array length stays the same because `map` always produces a one-to-one replacement, and the spread `{ ...n, text: action.text }` ensures the updated item is a new object reference so React detects the change.

