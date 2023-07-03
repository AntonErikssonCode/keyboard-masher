import React from "react";
import "./layout.css";
import Masher from "./mashSection/Masher";

interface LayoutProps {
  handleMashClick: () => void;
  playerInfo: any;
}
function Layout(props: LayoutProps) {


  
  return (
    <div className="container">
      <div className="container-upgrades"></div>
      <div className="container-mash">
        <Masher
          handleMashClick={props.handleMashClick}
          currentMashes={props.playerInfo.currentMashes}
        />
      </div>
      <div className="container-stats"></div>
    </div>
  );
}

export default Layout;
