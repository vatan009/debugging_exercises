import { useRef } from "react";
const InputFocusOnClick = () => {
  let temp = useRef();
  // TODO:
  function handleFocus() {
    temp.current.focus();
  }

  return (
    <div>
      <label htmlFor="input1">First Input:</label>
      <input id="input1" type="text" data-testid="input1" ref={temp} />
      <br />
      <label htmlFor="input2">Second Input:</label>
      <input id="input2" type="text" data-testid="input2" />
      <br />
      <button data-testid="focus-button" onClick={handleFocus}>
        Focus First Input
      </button>
    </div>
  );
};

export default InputFocusOnClick;
