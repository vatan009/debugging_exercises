import React, { useRef, useEffect } from "react";

export default function ScrollingText({ text, isScrolling }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isScrolling) {
      console.log("Starting scroll animation");
      ref.current.style.transform = "translateX(-100%)";
      ref.current.style.transition = "transform 10s linear";
    } else {
      console.log("Resetting scroll animation");
      ref.current.style.transform = "translateX(0)";
      ref.current.style.transition = "none";
    }
  }, [isScrolling]);

  return (
    <div ref={ref} data-testid="scrolling-text">
      {text}
    </div>
  );
}
