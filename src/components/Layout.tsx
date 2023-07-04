import React from "react";
import "./layout.css";
import Masher from "./mashSection/Masher";
import upgradesConfig from "../config/upgradesConfig";
import Upgrade from "./upgradesSection/Upgrade";
import { Player } from "tone";

interface LayoutProps {
  handleMashClick: () => void;
  playerInfo: any;
  handleSetPlayerInfo: (info: any) => void;
}

function Layout(props: LayoutProps) {
  return (
    <div className="container">
      <div className="container-upgrades">
        {upgradesConfig.map((upgrade, index) => {
          return (
            <Upgrade
              key={"upgrade" + index}
              upgrade={upgrade}
              playerInfo={props.playerInfo}
              handleSetPlayerInfo={props.handleSetPlayerInfo}
            />
          );
        })}
      </div>
      <div className="container-mash">
        <Masher
          handleMashClick={props.handleMashClick}
          currentMashes={props.playerInfo.currentMashes}
          mashPerSec={props.playerInfo.mashPerSec}
        />
      </div>
      <div className="container-stats"></div>
    </div>
  );
}

export default Layout;
