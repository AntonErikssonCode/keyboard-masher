import React, { useState } from "react";
import "./Masher.css";
import showTwoDecimals from "../../utlity/utilityFunctions";
interface MasherProps {
  handleMashClick: () => void;
  currentMashes: number;
  mashPerSec: number;
}

function Masher(props: MasherProps) {
  const laptop = require("../../assets/laptopClean.png");
  const [isPressed, setIsPressed] = useState(false);
  const [spawnedObject, setSpawnedObject] = useState({ x: 0, y: 0 });
  const fistIMG = require("../../assets/fist.png")
  function handleMouseDown() {
    setIsPressed(true);
  }

  function handleMouseUp() {
    setIsPressed(false);
  }

  function handleMash( event: React.MouseEvent) {
    props.handleMashClick();
    const { clientX, clientY } = event;
    setSpawnedObject({ x: clientX, y: clientY });
  }

  return (
    <div
      className={`masher-background`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleMash}
    >
       {spawnedObject && (
        <div
          className="spawned-object"
          style={{ left: spawnedObject.x, top: spawnedObject.y }}
        >
          Content of the spawned object
        </div>
      )}


      <div className="currentMashes crazy-box-shadow default-border">
        {showTwoDecimals(props.currentMashes) + " Mashes"}
      </div>
      <div className="mashPerSec crazy-box-shadow default-border">
        {showTwoDecimals(props.mashPerSec) + " Mashes/s"}
      </div>

      <div className={`laptop-container ${isPressed ? "pressed" : ""}`}>
        <img src={laptop} className="laptop-img " alt="laptop" />
      </div>
      <p className="masher-flavortext">
        Mash The Keyboard, Become A Programmer
      </p>
    </div>
  );
}

export default Masher;
