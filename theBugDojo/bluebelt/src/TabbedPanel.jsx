import { useState, useCallback } from "react";

const TOPICS = [
  { id: 1, label: "Topic 1", content: "Content for Topic 1" },
  { id: 2, label: "Topic 2", content: "Content for Topic 2" },
  { id: 3, label: "Topic 3", content: "Content for Topic 3" },
];

export default function TabbedPanel() {
  const [activeId, setActiveId] = useState(1);
  const [display, setDisplay] = useState(TOPICS[0].content);

  const handleSelect = useCallback((id) => {
    setActiveId(id);
    const topic = TOPICS.find((t) => t.id === id);
    setDisplay(topic.content);
  }, []);

  return (
    <div>
      <div>
        {TOPICS.map((t) => (
          <button key={t.id} onClick={() => handleSelect(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <p>{display}</p>
    </div>
  );
}
// Why this fixes it

// handleSelect closed over activeId from the render in which useCallback created it — with an empty dependency array, the function was created once on mount and permanently captured activeId at its initial value of 1. So TOPICS.find((t) => t.id === activeId) always searched for id 1 regardless of which button was clicked, and the display never changed. The fix is to look up the topic using the id argument passed directly into the handler — TOPICS.find((t) => t.id === id) — which is always the correct clicked value and does not depend on any stale closed-over state.
