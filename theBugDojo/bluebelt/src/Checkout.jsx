import { useReducer } from "react";

const CODES = { SAVE10: 10, SAVE20: 20, SAVE30: 30 };
const PRICE = 100;

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "APPLY": {
      // console.log(state);
      const temp = CODES[action.code] || 0;
      console.log("apply : ", temp);
      let result = {
        code: action.code,
        discount: temp,
        total: PRICE - (PRICE * temp) / 100,
      };
      // console.log(result);
      return result;
    }
    case "CLEAR":
      return { code: "", discount: 0, total: PRICE };
    default:
      return state;
  }
}

export default function Checkout() {
  const [state, dispatch] = useReducer(reducer, {
    code: "",
    discount: 0,
    total: PRICE,
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "APPLY", code: "SAVE10" })}>
          10% Off
        </button>
        <button onClick={() => dispatch({ type: "APPLY", code: "SAVE20" })}>
          20% Off
        </button>
        <button onClick={() => dispatch({ type: "APPLY", code: "SAVE30" })}>
          30% Off
        </button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      </div>
      <p>Code: {state.code || "none"}</p>
      <p>Discount: {state.discount}%</p>
      <p>Total: ${state.total}</p>
    </div>
  );
}
