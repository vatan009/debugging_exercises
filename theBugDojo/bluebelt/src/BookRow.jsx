import { useState } from "react";

const INITIAL_BOOKS = ["Clean Code", "The Pragmatic Programmer", "Refactoring"];

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
    setBooks((prev) => ["New Book", ...prev]);
  }

  return (
    <div>
      <button onClick={handleAdd}>Add Book</button>
      {books.map((book, index) => (
        <BookRow key={index} title={book} />
      ))}
    </div>
  );
}
