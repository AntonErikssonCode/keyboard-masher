/* import React, { useEffect, useState } from "react";
import "./upgrade.css";
import balanceConfig from "../../config/balanceConfig";
import Perk from "./Perk";
import showTwoDecimals from "../../utlity/utilityFunctions";

interface UpgradeProps {
  upgrade: any;
  playerInfo: any;
  handleSetPlayerInfo: (info: any) => void;
  upgradeOpen: any;
  handleSetUpgradeOpen: (index: number, open: boolean) => void;
  index: number;
}
function Upgrade({ handleSetPlayerInfo, upgrade, playerInfo }: UpgradeProps) {
  const { name, description, perks, difficulty, mashPerSec } = upgrade;
  const [isPressed, setIsPressed] = useState(false);
  const [mps, setMps] = useState(0);
  const [newCost, setNewCost] = useState(getCost(playerInfo, upgrade));
  const [bought, setBought] = useState(getBought(playerInfo, upgrade));
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }



  function handleMouseDown() {
    setIsPressed(true);
  }

  function handleMouseUp() {
    setIsPressed(false);
  }

  const [numberOfPerks, setGetNumberOfOwnedPerks] = useState(
    getNumberOfOwnedPerks(playerInfo, upgrade)
  );

  useEffect(() => {
    setGetNumberOfOwnedPerks(getNumberOfOwnedPerks(playerInfo, upgrade));
    setNewCost(getCost(playerInfo, upgrade));
    setBought(getBought(playerInfo, upgrade));
    setMps(showTwoDecimals(getMPS(mashPerSec, bought)));
  }, [playerInfo]);


  function getMPS(mashPerSec:number, bought:number){
    return  mashPerSec * bought;
  }


  function getNumberOfOwnedPerks(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let num = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        num = element.perks;
      }
    });
    return num;
  }

  function isPerkOwned(playerInfo: any, upgrade: any, perkIndex: number) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let perkOwned = false;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        perkOwned = element.perksOwned[perkIndex].owned;
      }
    });
    return perkOwned;
  }


  function getBought(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let bought = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        bought = element.number;
      }
    });
    return bought;
  }

  function getCost(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    const numberOfOwned = playerInfo.upgradesOwned;
    let mutiplier = 1;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        mutiplier = element.number + 1;
      }
    });

    const newPrice = Math.ceil(
      mutiplier === 0
        ? upgrade.cost
        : upgrade.cost * Math.pow(mutiplier, balanceConfig.upgradesMutiplier)
    );
    return newPrice;
  }

  function handleBuy() {
    if (playerInfo.currentMashes >= newCost) {
      const updatedPlayerInfo = {
        ...playerInfo,
        currentMashes: Math.ceil(playerInfo.currentMashes - newCost),

        upgradesOwned: playerInfo.upgradesOwned.map((upgradeOwned: any) => {
          if (upgradeOwned.name === upgrade.name) {
            return {
              ...upgradeOwned,
              number: upgradeOwned.number + 1,
            };
          }
          return upgradeOwned;
        }),
      };

      handleSetPlayerInfo(updatedPlayerInfo);
    }
  }

  return (
    <div className="upgradesSection" >
      <div className="upgrades-container crazy-box-shadow default-border" onClick={handleOpen}>
        <div className="upgrades-container-1">
          <div className="upgrades-container-2">
            {bought ? (
              <h3 >{name + "  (" + bought + " Days)"}</h3>
            ) : (
              <h3>{name +"  "}</h3>
            )}

            <h4 className="upgrades-description">{description}</h4>
            {bought ? (
               <h4 className="upgrades-mashesPerSec">{"+ "+mps + " Mashes/s"}</h4>
            ) : (
             null
            )}
          
          </div>
          <div className="upgrades-container-3">
            {perks.map((perk: any, index: number) => {
      
              return (
                <div
                  key={name + index}
                  className={`upgrade-bought ${
                    isPerkOwned(playerInfo, upgrade, index)
                      ? "upgrade-bought-true"
                      : ""
                  } `}
                ></div>
              );
            })}
          </div>
        </div>
        <button
          className={`button-code crazy-box-shadow default-border ${
            playerInfo.currentMashes >= newCost
              ? "button-code-glow"
              : "cant-afford-upgrade"
          }  ${isPressed ? "pressed" : ""}  `}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={(event) => {
            event.stopPropagation(); // Prevent event propagation
            handleBuy();
          }}
        >
          <h3 className="">{"Code in " + name}</h3>
          <h4 className="">{"Cost " + newCost + " Mashes"}</h4>
          <h4 className="">{ "+ " +mashPerSec+ " Mashes/s"}</h4>
        </button>
      </div>
      <div className="perks-container">
        {perks.map((perk: any, index: number) => {
          if (open) {
            return (
              <Perk
                handleSetPlayerInfo={handleSetPlayerInfo}
                key={perk.name + index}
                perk={perk}
                playerInfo={playerInfo}
                index={index}
                upgradeName={name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Upgrade;
 */
import React, { useEffect, useState } from "react";
import "./upgrade.css";
import balanceConfig from "../../config/balanceConfig";
import Perk from "./Perk";
import showTwoDecimals from "../../utlity/utilityFunctions";
interface UpgradeProps {
  upgrade: any;
  playerInfo: any;
  handleSetPlayerInfo: (info: any) => void;
  upgradeOpen: any;
  handleSetUpgradeOpen: (index: number, open: boolean) => void;
  index: number;
}
function Upgrade({ handleSetPlayerInfo, upgrade, playerInfo }: UpgradeProps) {
  const { name, description, perks, difficulty, mashPerSec } = upgrade;
  const [isPressed, setIsPressed] = useState(false);
  const [mps, setMps] = useState(0);
  const [newCost, setNewCost] = useState(getCost(playerInfo, upgrade));
  const [bought, setBought] = useState(getBought(playerInfo, upgrade));
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }



  function handleMouseDown() {
    setIsPressed(true);
  }

  function handleMouseUp() {
    setIsPressed(false);
  }

  const [numberOfPerks, setGetNumberOfOwnedPerks] = useState(
    getNumberOfOwnedPerks(playerInfo, upgrade)
  );

  useEffect(() => {
    setGetNumberOfOwnedPerks(getNumberOfOwnedPerks(playerInfo, upgrade));
    setNewCost(getCost(playerInfo, upgrade));
    setBought(getBought(playerInfo, upgrade));
    setMps(showTwoDecimals(getMPS(mashPerSec, bought)));
  }, [playerInfo]);


  function getMPS(mashPerSec:number, bought:number){
    return  mashPerSec * bought;
  }


  function getNumberOfOwnedPerks(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let num = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        num = element.perks;
      }
    });
    return num;
  }

  function isPerkOwned(playerInfo: any, upgrade: any, perkIndex: number) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let perkOwned = false;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        perkOwned = element.perksOwned[perkIndex].owned;
      }
    });
    return perkOwned;
  }

  const yes = isPerkOwned(playerInfo, upgrade, 0);

  function getBought(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let bought = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        bought = element.number;
      }
    });
    return bought;
  }

  function getCost(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    const numberOfOwned = playerInfo.upgradesOwned;
    let mutiplier = 1;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        mutiplier = element.number + 1;
      }
    });

    const newPrice = Math.ceil(
      mutiplier === 0
        ? upgrade.cost
        : upgrade.cost * Math.pow(mutiplier, balanceConfig.upgradesMutiplier)
    );
    return newPrice;
  }

  function handleBuy() {
    if (playerInfo.currentMashes >= newCost) {
      const updatedPlayerInfo = {
        ...playerInfo,
        currentMashes: Math.ceil(playerInfo.currentMashes - newCost),

        upgradesOwned: playerInfo.upgradesOwned.map((upgradeOwned: any) => {
          if (upgradeOwned.name === upgrade.name) {
            return {
              ...upgradeOwned,
              number: upgradeOwned.number + 1,
            };
          }
          return upgradeOwned;
        }),
      };

      handleSetPlayerInfo(updatedPlayerInfo);
    }
  }

  return (
    <div className="upgradesSection" >
      <div className="upgrades-container crazy-box-shadow default-border" onClick={handleOpen}>
        <div className="upgrades-container-1">
          <div className="upgrades-container-2">
            {bought ? (
              <h3 >{name + "  (" + bought + " Days)"}</h3>
            ) : (
              <h3>{name +"  "}</h3>
            )}

            <h4 className="upgrades-description">{description}</h4>
            {bought ? (
               <h4 className="upgrades-mashesPerSec">{"+ "+mps + " Mashes/s"}</h4>
            ) : (
             null
            )}
          
          </div>
          <div className="upgrades-container-3">
            {perks.map((perk: any, index: number) => {
              /*  let active = false;
              if (index + 1 <= numberOfPerks) {
                active = true;
              } */
              return (
                <div
                  key={name + index}
                  className={`upgrade-bought ${
                    isPerkOwned(playerInfo, upgrade, index)
                      ? "upgrade-bought-true"
                      : ""
                  } `}
                ></div>
              );
            })}
          </div>
        </div>
        <button
          className={`button-code crazy-box-shadow default-border ${
            playerInfo.currentMashes >= newCost
              ? "button-code-glow"
              : "cant-afford-upgrade"
          }  ${isPressed ? "pressed" : ""}  `}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={(event) => {
            event.stopPropagation(); // Prevent event propagation
            handleBuy();
          }}
        >
          <h3 className="">{"Code in " + name}</h3>
          <h4 className="">{"Cost " + newCost + " Mashes"}</h4>
          <h4 className="">{ "+ " +mashPerSec+ " Mashes/s"}</h4>
        </button>
      </div>
      <div className="perks-container">
        {perks.map((perk: any, index: number) => {
          if (open) {
            return (
              <Perk
                handleSetPlayerInfo={handleSetPlayerInfo}
                key={perk.name + index}
                perk={perk}
                playerInfo={playerInfo}
                index={index}
                upgradeName={name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Upgrade;