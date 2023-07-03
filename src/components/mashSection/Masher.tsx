import React from "react";
import "./Masher.css"
interface MasherProps {
  handleMashClick: () => void;
  currentMashes: number
}

function Masher(props: MasherProps) {
  const laptop = require("../../assets/laptopClean.png");

  function handleMash() {}
  return (
    <div className="masher-background" onClick={props.handleMashClick}>
        <div className="currentMashes">
  {  props.currentMashes}
  </div>
      <div className="laptop-container">
        <img src={laptop} className="laptop-img" />
      </div>
    </div>
  );
}

export default Masher;
