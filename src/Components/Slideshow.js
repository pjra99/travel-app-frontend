import React from "react";
import { useState, useEffect, useRef } from "react";
const colors = ["kerala.jpg", "homebg.jpg", "beach.jpg"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  //   useEffect(() => {
  //     setIndex((prevIndex) =>
  //       prevIndex === colors.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, delay);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        <img
          src={colors[index]}
          style={{
            height: "100px",
          }}
        />
      </div>
    </div>
  );
}

export default Slideshow;
