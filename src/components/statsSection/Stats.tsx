import React, { useEffect, useState } from "react";
import StatsCategory from "./StatsCategory";
import "./stats.css";
import { showTwoDecimals, shortenNumber } from "../../utlity/utilityFunctions";
import upgradesConfig from "../../config/upgradesConfig";
interface StatsProps {
  playerInfo: any;
}
function Stats({ playerInfo }: StatsProps) {
  const statsIMG = require("../../assets/stats.png");
  const info = playerInfo;
  const [expanded, setExpanded] = useState(true);

  function handleExpand() {
    
    setExpanded(!expanded);
  }
  function handleButtonExpand(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    handleExpand();
  }

  return (
    <div
      onClick={handleExpand}
      className={`stats-container crazy-box-shadow default-border ${
        expanded ? "stats-container-expanded" : ""
      }`}
    >
      <div
       
        className={`stats-top ${expanded ? "stats-top-expanded" : ""}`}
      >
        <button
          className={`stats-close-button ${expanded ? "" : "stats-close-button-hide"}`}
          onClick={handleExpand}
        ></button>
        <div className="stats-img-container ">
          <img src={statsIMG} className="stats-img" />
        </div>
        {expanded ? <h2 className="stats-title">Stats</h2> : null}
      </div>
      {expanded ? (
        <div className="stats-categories">
          <StatsCategory title="General Stats">
            <div className="stats-row">
              <h4>Total Mashes</h4>
              <p>{shortenNumber(playerInfo.totalMashes, false)}</p>
            </div>

            <div className="stats-row">
              <h4>Current Mashes</h4>
              <p>{shortenNumber(playerInfo.currentMashes, false)}</p>
            </div>
            <div className="stats-row">
              <h4>Mash Bonus on Click</h4>
              <p>{playerInfo.mashBonus}</p>
            </div>
            <div className="stats-row">
              <h4>Total Mash-Clicks</h4>
              <p>{playerInfo.totalClicks}</p>
            </div>
          </StatsCategory>
          <StatsCategory title="Mash Summary">
            <div className="stats-row-no-gap">
              <div className="stats-row-part">
                <h4>Upgrade</h4>
              </div>

              <div className="stats-row-part">
                <h4>MPS</h4>
              </div>
              <div className="stats-row-part-small"></div>
              <div className="stats-row-part">
                <h4>Amount</h4>
              </div>
              <div className="stats-row-part-small"></div>
              <div className="stats-row-part">
                <h4>Mutiplier</h4>
              </div>
              <div className="stats-row-part-small"></div>
              <div className="stats-row-part">
                <h4>Sum</h4>
              </div>
            </div>

            {playerInfo.upgradesOwned.map((upgrade: any, index: number) => {
              const name = upgrade.name;
              const multiplier = upgrade.multiplier;
              const amount = upgrade.number;
              const MPS =
                upgradesConfig.find((upgrade) => upgrade.name === name)
                  ?.mashPerSec ?? 0;
              const cost =
                upgradesConfig.find((upgrade) => upgrade.name === name)?.cost ??
                0;

              const totalMash = playerInfo.totalMashes;

              if (totalMash > cost * 0.8) {
                return (
                  <div
                    className="stats-row-no-gap"
                    key={"stats" + name + index}
                  >
                    <div className="stats-row-part">
                      <p>{name}</p>
                    </div>

                    <div className="stats-row-part">
                      <p>{shortenNumber(MPS, false)}</p>
                    </div>
                    <div className="stats-row-part-small">
                      <p>x</p>
                    </div>
                    <div className="stats-row-part">
                      <p>{amount}</p>
                    </div>
                    <div className="stats-row-part-small">
                      <p>x</p>
                    </div>
                    <div className="stats-row-part">
                      <p>{multiplier}</p>
                    </div>
                    <div className="stats-row-part-small">
                      <p>=</p>
                    </div>
                    <div className="stats-row-part">
                      <p> {shortenNumber(MPS * amount * multiplier, false)}</p>
                    </div>
                  </div>
                );
              }
            })}
          </StatsCategory>
          <StatsCategory title="Achievements">
            <div className="achievements">
              {playerInfo.achievement.map((achievement: any, index: number) => {
                let color = "#fff";
                let text = "";
                switch (achievement.type) {
                  case "mash":
                    color = "#8BC34A";
                    text = `You mashed the laptop ${shortenNumber(
                      achievement.amount, false
                    )} times!`;
                    break;
                  case "total":
                    color = "#FF4081";
                    text = `${shortenNumber(achievement.amount, false)} Total Mashes!`;
                    break;

                  default:
                    break;
                }

                return (
                  <div
                    key={"achievement" + index}
                    title={achievement.tooltip}
                    className="achievement" /* style={{background: color}} */
                  >
                    <div className="achievement-first-row">
                      <div
                        style={{ background: color }}
                        className="achievement-first-row-dot"
                      ></div>
                      <h4 className="achievement-text">{achievement.name}</h4>
                      <h5>{text}</h5>
                    </div>
                    <p className="achievement-text">{achievement.tooltip}</p>
                  </div>
                );
              }, [])}{" "}
            </div>
          </StatsCategory>
        </div>
      ) : null}
    </div>
  );
}

export default Stats;
