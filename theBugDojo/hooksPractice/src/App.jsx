import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
// import './App.css'
import Question1 from "./useEffect/Question1";
import Question3 from "./useEffect/Question3";
import Question4 from "./useEffect/Question4";
import Question5 from "./useEffect/Question5";
// import Question6 from "./useEffect/Question6";
// import Question7 from "./useEffect/Question4";
// import Question8 from "./useEffect/Question4";
// import Question9 from "./useEffect/Question4";
// import Question10 from "./useEffect/Question4";
import All from "./useEffect/All";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Question1 /> */}

      {/* <Question4 /> */}
      {/* <Question5 /> */}
      {/* <Question6 /> */}
      {/* <Question7 /> */}
      {/* <Question8 /> */}
      {/* <Question9 /> */}
      {/* <Question10/> */}
      <All/>
    </>
  );
}

export default App;
