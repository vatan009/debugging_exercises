// Why this fixes it

// key={index} tied each BookRow instance's identity to its position in the array. When a new book was prepended, every existing component shifted one slot — React saw the same key at each position, reused the existing instances in place, and their starred state moved with them rather than with the book. Giving each book a stable unique id and using key={book.id} lets React track each row by the item it represents. On prepend, React sees a new key at position 0, mounts a fresh unstarred row for it, and leaves every existing row untouched.

import { useState } from "react";

const INITIAL_BOOKS = [
  { id: 1, title: "Clean Code" },
  { id: 2, title: "The Pragmatic Programmer" },
  { id: 3, title: "Refactoring" },
];

let nextId = 4;

function BookRow({ title }) {
  const [starred, setStarred] = useState(false);
  return (
    <div>
      <span>{title}</span>
      <button onClick={() => setStarred((s) => !s)}>
        {starred ? "★" : "☆"}
      </button>
    </div>
  );
}

export default function ReadingList() {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  function handleAdd() {
    setBooks((prev) => [{ id: nextId++, title: "New Book" }, ...prev]);
  }

  return (
    <div>
      <button onClick={handleAdd}>Add Book</button>
      {books.map((book) => (
        <BookRow key={book.id} title={book.title} />
      ))}
    </div>
  );
}
