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
