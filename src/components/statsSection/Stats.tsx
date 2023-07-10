import React, { useState } from "react";
import StatsCategory from "./StatsCategory";
import "./stats.css";
/* import statsImage from "../../assets/stats.svg";
 */ interface StatsProps {
  playerInfo: any;
}
function Stats({ playerInfo }: StatsProps) {
  const statsIMG = require("../../assets/stats.png");
  const info = playerInfo;
  const [expanded, setExpanded] = useState(false);
  function handleExpand() {
    setExpanded(!expanded);
  }
  return (
    <div
      onClick={handleExpand}
      className={`stats-container crazy-box-shadow default-border ${
        expanded ? "stats-container-expanded" : ""
      }`}
    >
      <div className={`stats-top ${expanded ? "stats-top-expanded" : ""}`}>
        <div className="stats-img-container ">
          <img src={statsIMG} className="stats-img" />
        </div>
        {expanded ? <h2 className="stats-title">Stats</h2> : null}
      </div>
      {expanded ? (
        <div className="stats-categories">
          <StatsCategory title="General Stats">
            <p>asdas</p>
            <p>asdas</p>
          </StatsCategory>
          <StatsCategory title="Summary">
            {/* Place your content for Category 2 here */}
            <p>asdas</p>
            <p>asdas</p>
          </StatsCategory>
          <StatsCategory title="Progress">
            {/* Place your content for Category 2 here */}
            <p>asdas</p>
            <p>asdas</p>
          </StatsCategory>
        </div>
      ) : null}
    </div>
  );
}

export default Stats;
