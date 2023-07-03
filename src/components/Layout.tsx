import React from "react";
import "./layout.css";
import Masher from "./mashSection/Masher";
import upgradesConfig from "../config/upgradesConfig";
import Upgrade from "./upgradesSection/Upgrade";

interface LayoutProps {
  handleMashClick: () => void;
  playerInfo: any;
}
function Layout(props: LayoutProps) {

  
  return (
    <div className="container">
      <div className="container-upgrades">
        {upgradesConfig.map((upgrade, index)=>{
          console.dir(upgrade)
          return(<Upgrade key={"upgrade"+index} upgrade={upgrade}/>)

        })}
      </div>
      <div className="container-mash">
        <Masher
          handleMashClick={props.handleMashClick}
          currentMashes={props.playerInfo.currentMashes}
        />
      </div>
      <div className="container-stats">

      </div>
    </div>
  );
}

export default Layout;
