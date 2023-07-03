import React, { useState } from "react";
import "./Masher.css";

interface MasherProps {
  handleMashClick: () => void;
  currentMashes: number;
}

function Masher(props: MasherProps) {
  const laptop = require("../../assets/laptopClean.png");
  const [isPressed, setIsPressed] = useState(false);

  function handleMouseDown() {
    setIsPressed(true);
  }

  function handleMouseUp() {
    setIsPressed(false);
  }

  function handleMash() {
    props.handleMashClick();
    console.log("click")
  }

  return (
    <div
      className={`masher-background`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleMash}
    >
      <div className="currentMashes crazy-box-shadow default-border">{props.currentMashes}</div>
      <div className={`laptop-container ${isPressed ? "pressed" : ""}`} >
        <img src={laptop} className="laptop-img " alt="laptop" />
      </div>
    </div>
  );
}

export default Masher;
