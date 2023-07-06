import React, { useState } from "react";
import "./Masher.css";
import { shortenNumber } from "../../utlity/utilityFunctions";

interface SpawnedObject {
  id: number;
  x: number;
  y: number;
}

interface MasherProps {
  handleMashClick: () => void;
  currentMashes: number;
  mashPerSec: number;
  mashBonus: number;
}

function Masher(props: MasherProps) {
  const laptop = require("../../assets/laptopClean.png");
  const [isPressed, setIsPressed] = useState(false);
  const [spawnedObjects, setSpawnedObjects] = useState<SpawnedObject[]>([]);
  const fistIMG = require("../../assets/fist.png");
  const maxObjects = 3;

  function handleMouseDown() {
    setIsPressed(true);
  }

  function handleMouseUp() {
    setIsPressed(false);
  }

  function handleMash(event: React.MouseEvent) {
    props.handleMashClick();
  
  }

  return (
    <div
      className={`masher-background`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleMash}
    >
    {/*   {spawnedObjects.map((obj) => (
        <div
          key={obj.id}
          className="spawned-object"
          style={{ left: obj.x, top: obj.y }}
        >
          <div className={`fist-container`}>
            <img src={fistIMG} className="fist-img" alt="fist" />
          </div>
        </div>
      ))} */}

      <div className="currentMashes crazy-box-shadow default-border">
        {shortenNumber(props.currentMashes) + " Mashes"}
      </div>
      <div className="mashPerSec crazy-box-shadow default-border">
        {shortenNumber(props.mashPerSec) + " Mashes/s"}
      </div>

      <div className={`laptop-container ${isPressed ? "pressed" : ""}`}>
        <img src={laptop} className="laptop-img" alt="laptop" draggable={false}/>
      </div>
      <p className="masher-flavortext">Mash The Keyboard, Become A Programmer</p>
    </div>
  );
}

export default Masher;
