import { useState } from "react";

const INITIAL = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" },
];

export default function UndoEditor() {
  const [items, setItems] = useState(INITIAL);
  const [history, setHistory] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState("");

  function handleEdit(item) {
    setEditingId(item.id);
    setDraft(item.name);
  }

  function handleSave(id) {
    // ✅ FIX: avoid mutation
    const copy = items.map((i) => (i.id === id ? { ...i, name: draft } : i));

    setItems(copy);

    // store previous state
    setHistory((p) => [...p, items]);

    console.log("--------------------");
    setEditingId(null);
    setDraft("");
  }

  function handleUndo() {
    if (history.length === 0) return;

    setHistory((prev) => {
      const last = prev[prev.length - 1]; // ✅ get last snapshot
      const temp = prev.slice(0, prev.length - 1);

      setItems(last); // ✅ restore

      return temp;
    });
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {editingId === item.id ? (
            <input value={draft} onChange={(e) => setDraft(e.target.value)} />
          ) : (
            <span>{item.name}</span>
          )}

          {editingId === item.id ? (
            <button onClick={() => handleSave(item.id)}>Save</button>
          ) : (
            <button onClick={() => handleEdit(item)}>Edit</button>
          )}
        </div>
      ))}

      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}


//seen the soln
