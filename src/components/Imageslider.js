import React, { useState } from "react";

const Imageslider = ({ slides }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const slider = {
    height: "100%",
    position: "relative",
  };

  const slide = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currIndex].url})`,
  };

  const leftarrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "16px",
    fontSize: "30px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightarrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "16px",
    fontSize: "30px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const gotoprev = () => {
    const isfirst = currIndex === 0;
    const newIndex = isfirst ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };
  const gotonext = () => {
    const islast = currIndex === slides.length - 1;
    const newIndex = islast ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };
  return (
    <div style={slider}>
      <div style={leftarrow} onClick={gotoprev}>
        &#9665;
      </div>
      <div style={rightarrow} onClick={gotonext}>
        &#9655;
      </div>

      <div style={slide}></div>
    </div>
  );
};

export default Imageslider;
