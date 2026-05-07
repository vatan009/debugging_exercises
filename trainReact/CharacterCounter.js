import React, { useState } from "react";

const CharacterCounter = () => {
  const [inputValue, setInputValue] = useState("");
  const maxChars = 20;
  function handleText(e) {
    setInputValue(e.target.value.slice(0, 20));
  }

  return (
    <div>
      <input
        data-testid="input"
        type="text"
        value={inputValue}
        onChange={handleText}
      />
      <p data-testid="char-count">
        {inputValue.length} / {maxChars}
      </p>
    </div>
  );
};

export default CharacterCounter;
