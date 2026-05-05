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
    setHistory((prev) => [...prev, items]);
    const copy = [...items];
    const target = copy.find((i) => i.id === id);
    target.name = draft;
    setItems(copy);
    setEditingId(null);
  }

  function handleUndo() {
    if (history.length === 0) return;
    setItems(history[history.length - 1]);
    setHistory((prev) => prev.slice(0, -1));
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
