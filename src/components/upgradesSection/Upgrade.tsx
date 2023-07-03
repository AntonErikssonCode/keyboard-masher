import React from "react";
import "./upgrade.css";

interface UpgradeProps {
  upgrade: any;
}
function Upgrade({ upgrade }: UpgradeProps) {
  const { programming, description, upgrades, difficulty } = upgrade;
  return (
    <div className="upgrades-container crazy-box-shadow default-border">
      <div className="upgrades-container-1">
        <div className="upgrades-container-2">
          <h3>{programming}</h3>
          <h4>{description}</h4>
        </div>
        <div className="upgrades-container-3">
          <div className="upgrade-bought"></div>
          <div className="upgrade-bought"></div>
          <div className="upgrade-bought"></div>
        </div>
      </div>
      <button>CODE</button>
    </div>
  );
}

export default Upgrade;
