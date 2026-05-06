import React, { useState, useRef, useEffect } from "react";

function InputAutoFocus() {
  const [inputValue, setInputValue] = useState("");
  let temp = useRef();
  function handleInput() {
    setInputValue(temp.current.value);
  }
  function handleFocus() {
    temp.current.focus();
  }

  useEffect(() => {
    handleFocus();
  }, []);

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        data-testid="inputField"
        type="text"
        ref={temp}
        onChange={handleInput}
      />
      <p data-testid="pInputValue">Current value: {inputValue}</p>
    </div>
  );
}

export default InputAutoFocus;
